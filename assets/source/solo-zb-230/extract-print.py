from PIL import Image
from pathlib import Path

folder = Path(__file__).resolve().parent
source = Image.open(folder / "references/00-product-source.png").convert("RGB")
bounds = (275, 630, 855, 965)
crop = source.crop(bounds)
rgba = Image.new("RGBA", crop.size, (0, 0, 0, 0))
# Preserve red source pixels and their anti-aliased edges, without the white case.
for y in range(crop.height):
    for x in range(crop.width):
        r, g, b = crop.getpixel((x, y))
        if r > 90 and r > g * 1.35 and r > b * 1.25:
            alpha = min(255, max(0, int((r - max(g, b)) * 2.5)))
            rgba.putpixel((x, y), (r, g, b, alpha))
# Neither the QR-like graphic nor the adjacent stamp is approved artwork.
for y in range(855 - bounds[1], 915 - bounds[1]):
    for x in range(345 - bounds[0], 470 - bounds[0]):
        rgba.putpixel((x, y), (0, 0, 0, 0))
rgba.resize((2048, 1183), Image.Resampling.LANCZOS).save(folder / "textures/front-print.png")
