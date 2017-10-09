const cheerio = require('cheerio');
const https = require('https');
const superagent = require('superagent');
const fs = require('fs');

function exportHTML(html) {
  fs.writeFile(
    'resource/export.html',
    JSON.stringify(obj, null, 4),
    (error) => {
      console.error(error);
    }
  );
}

function exportJSON(obj, filename) {
  fs.writeFile(
    `resource/${filename}`,
    JSON.stringify(obj, null, 4),
    (error) => {
      console.error(error);
    }
  );
}

async function crawler() {
  try {
    const url = 'https://tiki.vn/nha-sach-tiki';
    const target = await superagent.get(url);
    const $ = cheerio.load(target.text);
    const itemsSelector = $('.product-listing .product-item > a');
    let items = [];
    let categories = [];

    for ( i = 0; i < itemsSelector.length; i += 1 ) {
      let el = itemsSelector[i];
      const itemURL = $(el).attr("href");
      const itemTarget = await superagent.get(itemURL);
      await superagent;
      const $item = cheerio.load(itemTarget.text, { decodeEntities: false });
      let cat = categories.find(cat => {
        return cat.title === $item('#productset_name').val().trim();
      });
      if(cat === undefined) {
        cat = {
          category_id: categories.length+1,
          title: $item('#productset_name').val(),
        };
        categories.push(cat);
      }
      items.push({
        product_id: +$item('#product_id').val(),
        title: $item('#product-name').text().trim(),
        sku: +$item('#product_sku').val(),
        price: +$item('#product_price').val(),
        category_id: cat.category_id,
      });
    }
    exportJSON(items, 'products.json');
    exportJSON(categories, 'categories.json');
    console.log('crawler OK');
  } catch (err) {
    console.log(err);
  }
}

crawler();
