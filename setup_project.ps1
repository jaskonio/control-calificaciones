# Crear subdirectorios dentro de 'src'
$srcDirs = @(
    "config",
    "controllers",
    "middleware",
    "models",
    "routes",
    "utils"
)

foreach ($dir in $srcDirs) {
    New-Item -Path ".\src" -Name $dir -ItemType Directory
}

# Crear archivos iniciales dentro de 'src'
$srcFiles = @(
    "src/server.ts",
    "src/types.ts"
)

foreach ($file in $srcFiles) {
    New-Item -Path $file -ItemType File
}

# Contenido inicial para algunos archivos

# Contenido para src/server.ts
@"
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hola, mundo!');
});

app.listen(port, () => {
    console.log('Servidor corriendo en http://localhost:' + port);
});
"@ | Out-File -FilePath "src/server.ts" -Encoding UTF8

# Contenido para src/types.ts (puedes ampliarlo según tus necesidades)
@"
// Define tus tipos aquí
"@ | Out-File -FilePath "src/types.ts" -Encoding UTF8

# Mensaje final
Write-Output "Estructura del proyecto '$projectName' creada exitosamente."
