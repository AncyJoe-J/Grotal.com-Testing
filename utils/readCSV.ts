import * as fs from 'fs';
import * as path from 'path';

export function readCSV(filePath: string): Record<string, string>[] {
  const fullPath = path.resolve(filePath);
  const data = fs.readFileSync(fullPath, 'utf-8');
  const lines = data.trim().split('\n');
  const headers = lines[0].split(',');

  return lines.slice(1).map(line => {
    const values = line.split(',');
    const row: Record<string, string> = {};
    headers.forEach((header, index) => {
      row[header.trim()] = values[index].trim();
    });
    return row;
  });
}
