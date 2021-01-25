const import_product_headers = "Type,SKU,Name,Published,Is featured?,Visibility in catalog,Short description,Description,Date sale price starts,Date sale price ends,Tax status,Tax class,In stock?,Stock,Low stock amount,Backorders allowed?,Sold individually?,Weight (kg),Length (cm),Width (cm),Height (cm),Allow customer reviews?,Purchase note,Sale price,Regular price,Categories,Tags,Shipping class,Images,Download limit,Download expiry days,Parent,Grouped products,Upsells,Cross-sells,External URL,Button text,Position,Attribute 1 name,Attribute 1 value(s),Attribute 1 visible,Attribute 1 global,Attribute 2 name,Attribute 2 value(s),Attribute 2 visible,Attribute 2 global,Attribute 3 name,Attribute 3 value(s),Attribute 3 visible,Attribute 3 global,Attribute 4 name,Attribute 4 value(s),Attribute 4 visible,Attribute 4 global,Attribute 5 name,Attribute 5 value(s),Attribute 5 visible,Attribute 5 global,Attribute 6 name,Attribute 6 value(s),Attribute 6 visible,Attribute 6 global";
const headers = import_product_headers.split(",");

const header_with_ids = headers.map(header => {
  const replacer = new RegExp(" ", 'g');

  return {
    id: header.replace(replacer, "").replace("-", "").replace("(", "").replace(")", "").replace("?", ""),
    title: header,
  }
});
// console.log(header_with_ids);
const ivs = {};
const ids = header_with_ids.map(hid => {
  ivs[hid.id] = 1;
  return 1
});
console.log(ivs);