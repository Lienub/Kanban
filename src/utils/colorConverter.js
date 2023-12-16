export function chooseTextColor(hexColor) {
    // Remove the '#' if present
    hexColor = hexColor.replace(/^#/, '');
  
    // Convert the hex color to RGB
    const bigint = parseInt(hexColor, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
  
    // Calculate the brightness using the formula: 0.299*R + 0.587*G + 0.114*B
    const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
    // Choose black or white based on brightness
    return brightness > 0.5 ? 'black' : 'white';
  }