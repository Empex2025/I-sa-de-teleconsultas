import express from 'express';
import cluster from 'cluster';
import * as os from 'os';
import { useExpressApp } from './useApp';
import dataSource from './database/typeorm';

export const app = express();

export function server() {
  const numCPUs = os.cpus().length;
  if (cluster.isPrimary) {
    // Crie processos filhos
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      console.log(`Processo filho ${worker.process.pid} morreu`);
    });
  } else {
    // Código do seu aplicativo Express
    useExpressApp(app);
    dataSource
      .initialize()
      .then(() => {
        app.listen(80, () => {
          console.log('servidor rodando');
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
