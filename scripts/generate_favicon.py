from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

# Output path
out_path = Path(__file__).resolve().parent.parent / 'public' / 'favicon.ico'
out_path.parent.mkdir(parents=True, exist_ok=True)

# Base canvas
size = 256
img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# Colors (Tailwind purple gradient feel)
purple1 = (124, 58, 237, 255)  # #7c3aed
purple2 = (168, 85, 247, 255)  # #a855f7

# Simple diagonal gradient background with rounded corners
for i in range(size):
    # interpolate color along diagonal
    t = i / (size - 1)
    r = int(purple1[0] * (1 - t) + purple2[0] * t)
    g = int(purple1[1] * (1 - t) + purple2[1] * t)
    b = int(purple1[2] * (1 - t) + purple2[2] * t)
    draw.line([(0, i), (size, i)], fill=(r, g, b, 255))

# Clip to rounded rectangle by compositing with mask
mask = Image.new('L', (size, size), 0)
mask_draw = ImageDraw.Draw(mask)
radius = 48
mask_draw.rounded_rectangle([0, 0, size, size], radius=radius, fill=255)
bg = Image.new('RGBA', (size, size))
bg.paste(img, (0, 0), mask)
img = bg
draw = ImageDraw.Draw(img)

# Draw a simple milk droplet using polygon approximation
drop = Image.new('RGBA', (size, size), (0, 0, 0, 0))
d = ImageDraw.Draw(drop)
cx, cy = size // 2, size // 2 - 10
top = (cx, cy - 90)
left = (cx - 60, cy - 10)
right = (cx + 60, cy - 10)
bottom = (cx, cy + 80)
points = [top, (cx - 45, cy - 20), left, (cx - 30, cy + 40), bottom, (cx + 30, cy + 40), right, (cx + 45, cy - 20)]
d.polygon(points, fill=(255, 255, 255, 255))

# small highlight
d.ellipse([cx - 14, cy + 10, cx + 14, cy + 38], fill=(248, 250, 252, 230))

img.alpha_composite(drop)

# Save ICO with multiple sizes
sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
img.save(out_path, format='ICO', sizes=sizes)
print(f"Generated favicon at {out_path}")

