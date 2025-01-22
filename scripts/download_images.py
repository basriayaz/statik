import os
import requests
import re

# Project images and their URLs
images = {
    "lotus-meydan": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/Kuba_Lotus_03-1920x1901-1-square-f00e453b54cb07ef001e7fec6b6dc9c1-u01fyma29qzw.webp",
    "lotus-koru": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/1500-RENDER-1-1920x1371-1-square-a1804c7ad53150e3336bc190fe6cb42b-adgso0te697u.webp",
    "nefes-atakent": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/EMS_REV_03-1920x1508-1-square-62dc06ab658a7f837bf1b0d60352e2f7-rsiz1yag2m0o.webp",
    "brand-atakent-2": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/KM-ems-1-2-220425-15-1920x1280-1-square-8d5eddc9d71ea7a4fc60baf963ce8de3-tib0c3vl72fw.webp",
    "brand-atakent-1": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/03-1920x1600-1-square-36cdc2307e72187f88e6997470c9e65e-ofmqegjkbsud.webp",
    "panorama-buyukcekmece": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/panaroma-bÅyÅkáekmece-1-1920x1080-1-square-0ef8c43bd1aa3d4ac27fe9d94fd60f13-hdlut0ns4ky2.webp",
    "kagithane-gul-yapi": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/KAGITHANE-GUL-YAPI-1-scaled-1-square-ea855c4863901b222e8f5566e2479604-ysrtm1goza95.webp",
    "ismail-altun": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/ISMAIL-ALTUN-1-1920x1021-1-square-07aed8f334d37742c34f83662fe3fbf5-j6si1bdy5fez.webp",
    "alya-trio": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/ALYA-TRIO-1-1920x1200-1-square-6988b5cad6f90f107b4ca14bb7ca0106-tjhprvqagwe2.webp",
    "batikoy-konut": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/BATIKOY-KONUT-2-1920x1080-1-square-333f4284240406b632b7df4db99d6dd6-bvigcnu7q19a.webp",
    "huseyin-ozturk-fabrika": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/HUSEYIN-OZTURK-FABRIKA-1-1920x1067-1-square-ca1606abcacaefd91b2fb317b39d67c2-z6ndcx20ao5b.webp",
    "marmara-konaklari": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/MARMARA-KONAKLARI-1-1920x867-1-square-26830ab5f5773da51e656f53105207cc-os8a3qkzr2wc.webp",
    "modern-egitim-koleji": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/MODERN-EGITIM-KOLEJI-1-1920x1080-1-square-18a9bc0e8dc6a4fc0de29658c0a53575-abighkc3j2vp.webp",
    "sahil-konaklari": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/1-1-1920x1040-1-square-938c761874af3459be5bae845245e0c7-cavnj2l4ixh7.webp",
    "tesa": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/TESA-ZEYTINBURNU-1-scaled-1-square-cc3710fcbaf1593f1e2ce9d7c53de825-216zl9ucpqvj.webp",
    "hadimkoy-cami": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/HADIMKOY-CAMI-1-1920x1920-1-square-b8ac03a5a4b6e09199435cc8fd8fb032-a1nszj50u8m6.webp",
    "avcilar-otel": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/AVCILAR-OTEL-2-1920x1920-1-square-a002c67f49d2a7115fa3c32c92fea33a-b61985wynzli.webp",
    "kugulu-park": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/BEYLIKDUZU-RESTORANT-1-1920x1362-1-square-c8aced863962d6836983ed0a999c432d-phke8u26qnbr.webp",
    "alya-onist": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/ALYA-ONIST-1-1920x1067-1-square-889e46edfe14b3d08ee54550808eef45-w7iuafn469p2.webp",
    "zigana-avm": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/ZIGANA-AVM-1-1920x1200-1-square-2d22a68854a66b3930fe4a800dc59285-fhcqypkz8357.webp",
    "beyoglu-konut": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/BEYOGLU-KONUT-1-scaled-1-square-31199c69940345e52ae381da4341858b-hk8soat9wpj6.webp",
    "engin-grup": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/ENGIN-GRUP-1-1920x1080-1-square-9d96c9af39130076f17232b33de15076-0ewrd8j6aqbt.webp",
    "bomonti-otel": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/BOMONTI-OTEL-1-1920x1362-1-square-5d569f75846f4999d0e0db6cb34427fb-lsvgbzwcqt4i.webp",
    "imamoglu-insaat": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/IMAMOGLU-INSAAT-1-1920x1440-1-square-d23175921f0b745e4da4ac54cca3f7b0-7o2lift1jvqe.webp",
    "palm-marin": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/PALM-MARIN-1-1920x1200-1-square-1d1e177dbce573ecb838a4bff4319354-6cgdlwrpjq0o.webp",
    "pagev": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/PAGEV-1-1920x960-1-square-182c03d10545dc2c74efe676f6ecde8b-vilycb85oefw.webp",
    "oto-galeri": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/OTO-GALERI-1-1920x1920-1-square-61f7b6d6ecdbcc94054188fddf27787e-o0vngdhpml42.webp",
    "mabeyn-sahil": "https://statikprojeler.com/wp-content/uploads/bb-plugin/cache/MABEYN-SAHIL-1-1920x1200-1-square-2caaaaa1ff64dcdfcb703e5de11f2301-ot68ly1rj2pw.webp",
}

# Create the projects directory if it doesn't exist
os.makedirs("public/images/projects", exist_ok=True)

# Download each image
for name, url in images.items():
    print(f"Downloading {name}...")
    try:
        response = requests.get(url)
        response.raise_for_status()
        
        # Save the image
        with open(f"public/images/projects/{name}.webp", "wb") as f:
            f.write(response.content)
        print(f"Successfully downloaded {name}")
    except Exception as e:
        print(f"Failed to download {name}: {str(e)}")

print("Download complete!") 