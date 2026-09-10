ПАПКА ДЛЯ ФОТОГРАФИЙ
======================

Сейчас на сайте используются стилизованные SVG-иллюстрации (hero.svg,
quarry.svg, railway.svg). Заказчик хочет красивые фото, сгенерированные ИИ.

ЧТО СДЕЛАТЬ:
1. Сгенерируйте изображения в любом ИИ-генераторе (Midjourney, Kandinsky,
   Stable Diffusion, DALL-E и т.п.) по промптам ниже.
2. Сохраните их в ЭТУ папку images/ с указанными именами.
3. Имена (без формата имеют значение, положите .jpg):
   - hero.jpg       — панорама гранитного карьера (для главного экрана)
   - quarry.jpg     — карьер с уступами, самосвал
   - railway.jpg    — ж/д тупик, вагоны, штабель щебня
   - materials.jpg  — штабели щебня и песка (страница «Продукция»)
   - equipment.jpg  — экскаватор/кран на объекте (страница «Услуги»)
4. В файлах css/style.css и страницах *.html замените:
   - images/hero.svg      -> images/hero.jpg
   - images/quarry.svg    -> images/quarry.jpg
   - images/railway.svg   -> images/railway.jpg
   (просто найдите по имени и замените расширение)

РЕКОМЕНДУЕМЫЕ ПРОМПТЫ (для красивого результата):

hero.jpg (1920x1000):
  "Cinematic wide shot of a granite quarry at golden hour, terraced rock
  ledges, heavy mining excavator, dump truck, warm amber sunlight,
  dramatic sky, photorealistic, high detail"

quarry.jpg (1600x1000):
  "Granite quarry with stepped benches, dump truck loading crushed stone,
  quarry excavator with bucket, dusty air, cool grey rock with warm
  highlights, photorealistic industrial photography"

railway.jpg (1600x1000):
  "Industrial railway siding in quarry, freight wagons loaded with crushed
  granite, wheel loader, stockpiles of gravel, evening light, photorealistic"

materials.jpg (1600x1000):
  "Large stockpiles of crushed stone and sand in an outdoor storage yard,
  piles of granite gravel different fractions, front loader, clear sky,
  photorealistic"

equipment.jpg (1600x1000):
  "Excavator working at a construction site, caterpillar excavator digging,
  earthmoving machinery, warm rim light, photorealistic industrial"

ПРИМЕЧАНИЕ: если картинку не положить, страница всё равно будет выглядеть
аккуратно — под SVG-иллюстрациями тёмные градиентные фоны.