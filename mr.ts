import fs from 'fs';
import path from 'path';

// Caminho para a pasta de entidades
const folderPath = path.join(__dirname, 'src', 'app', 'entities');
const outputFile = path.join(__dirname, 'MergedEntities.ts');

// Lê todos os arquivos TypeScript da pasta
const files = fs.readdirSync(folderPath).filter(file =>
  file.endsWith('.ts') && file !== 'index.ts'
);

let mergedContent = '';

files.forEach(file => {
  const content = fs.readFileSync(path.join(folderPath, file), 'utf-8');
  mergedContent += `\n// ========== ${file} ==========\n`;
  mergedContent += content + '\n';
});

// Salva tudo em um novo arquivo
fs.writeFileSync(outputFile, mergedContent);

console.log(`✅ Arquivos mesclados com sucesso em: ${outputFile}`);
