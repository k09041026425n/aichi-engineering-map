const companies = [
  {name:"Toyota Motor Corporation",ticker:"7203",latitude:35.05419,longitude:137.15535,headquarters:"1 Toyota-Cho, Toyota City, Aichi",marketCapYen:44762826539820,marketCapText:"¥44.76 trillion",industry:"Automotive",business:"Production and sales of motor vehicles and related mobility products.",founded:1937,employees:"390,927 (consolidated)",website:"https://global.toyota/en/",sourceUrlMarketCap:"https://finance.yahoo.co.jp/quote/7203.T",sourceUrlBusiness:"https://global.toyota/en/company/profile/overview/",sourceUrlHeadquarters:"https://global.toyota/en/company/profile/overview/",logo:"images/logos/toyota.jpg"},

  {name:"DENSO Corporation",ticker:"6902",latitude:35.00045,longitude:137.01050,headquarters:"1-1 Showa-cho, Kariya, Aichi",marketCapYen:5727352542043,marketCapText:"¥5.73 trillion",industry:"Automotive Components",business:"Development and manufacture of automotive technologies, systems and components.",founded:1949,employees:"154,716 (consolidated)",website:"https://www.denso.com/global/en/",sourceUrlMarketCap:"https://finance.yahoo.co.jp/quote/6902.T",sourceUrlBusiness:"https://www.denso.com/global/en/about-us/corporate-info/profile/",sourceUrlHeadquarters:"https://www.denso.com/global/en/about-us/corporate-info/profile/",logo:null},

  {name:"Niterra Co., Ltd.",ticker:"5334",latitude:35.17195,longitude:136.91055,headquarters:"1-1-1 Higashisakura, Higashi-ku, Nagoya, Aichi",marketCapYen:1875917283800,marketCapText:"¥1.88 trillion",industry:"Automotive Components and Ceramics",business:"Production of spark plugs, automotive sensors, technical ceramics and related products.",founded:1936,employees:"15,698 (consolidated)",website:"https://www.niterragroup.com/english/",sourceUrlMarketCap:"https://finance.yahoo.co.jp/quote/5334.T",sourceUrlBusiness:"https://www.niterragroup.com/english/corporate/profile/overview/index.html",sourceUrlHeadquarters:"https://www.niterragroup.com/english/corporate/profile/overview/index.html",logo:null},

  {name:"Aisin Corporation",ticker:"7259",latitude:34.98855,longitude:137.01885,headquarters:"2-1 Asahi-machi, Kariya, Aichi",marketCapYen:1614314146097,marketCapText:"¥1.61 trillion",industry:"Automotive Components",business:"Manufacture and sale of automotive parts, mobility systems and related products.",founded:1965,employees:"not verified",website:"https://www.aisin.com/en/",sourceUrlMarketCap:"https://finance.yahoo.co.jp/quote/7259.T",sourceUrlBusiness:"https://www.aisin.com/en/profile/global/",sourceUrlHeadquarters:"https://www.aisin.com/en/profile/factory/",logo:"images/logos/aisin.svg"},

  {name:"NGK Insulators, Ltd.",ticker:"5333",latitude:35.12025,longitude:136.91985,headquarters:"2-56 Suda-cho, Mizuho-ku, Nagoya, Aichi",marketCapYen:1599847616624,marketCapText:"¥1.60 trillion",industry:"Industrial Ceramics",business:"Production of ceramic products for energy, electronics, mobility and environmental applications.",founded:1919,employees:"not verified",website:"https://www.ngk-insulators.com/en/",sourceUrlMarketCap:"https://finance.yahoo.co.jp/quote/5333.T",sourceUrlBusiness:"https://www.ngk-insulators.com/en/resource/pdf/info/company_en.pdf",sourceUrlHeadquarters:"https://www.ngk-insulators.com/en/resource/pdf/info/company_en.pdf",logo:"images/logos/ngk.svg"},

  {name:"Makita Corporation",ticker:"6586",latitude:34.98257,longitude:137.08514,headquarters:"3-11-8 Sumiyoshi-cho, Anjo, Aichi",marketCapYen:1451330806160,marketCapText:"¥1.45 trillion",industry:"Power Tools",business:"Production and sales of electric power tools, gardening equipment and related products.",founded:1915,employees:"17,586 (consolidated)",website:"https://www.makita.biz/",sourceUrlMarketCap:"https://finance.yahoo.co.jp/quote/6586.T",sourceUrlBusiness:"https://www.makita.biz/company/about/data/",sourceUrlHeadquarters:"https://www.makita.biz/company/location/domestic/",logo:"images/logos/makita.svg"},

  {name:"Brother Industries, Ltd.",ticker:"6448",latitude:35.11905,longitude:136.92130,headquarters:"15-1 Naeshiro-cho, Mizuho-ku, Nagoya, Aichi",marketCapYen:1004549053830,marketCapText:"¥1.00 trillion",industry:"Electrical and Industrial Equipment",business:"Production of printing equipment, industrial machinery, sewing products and related solutions.",founded:1908,employees:"39,495 (consolidated)",website:"https://global.brother/en/",sourceUrlMarketCap:"https://finance.yahoo.co.jp/quote/6448.T",sourceUrlBusiness:"https://global.brother/en/corporate/profile/outline",sourceUrlHeadquarters:"https://global.brother/en/corporate/profile/outline",logo:"images/logos/brother.png"},

  {name:"Hoshizaki Corporation",ticker:"6465",latitude:35.05620,longitude:136.99130,headquarters:"3-16 Sakae-cho Minamiyakata, Toyoake, Aichi",marketCapYen:826453130400,marketCapText:"¥0.83 trillion",industry:"Commercial Kitchen Equipment",business:"Research, development, manufacture and sale of commercial kitchen appliances and equipment.",founded:1947,employees:"16,061 (consolidated)",website:"https://www.hoshizaki.co.jp/en/",sourceUrlMarketCap:"https://finance.yahoo.co.jp/quote/6465.T",sourceUrlBusiness:"https://www.hoshizaki.co.jp/en/company/profile.html",sourceUrlHeadquarters:"https://www.hoshizaki.co.jp/en/company/profile.html",logo:null},

  {name:"JTEKT Corporation",ticker:"6473",latitude:34.98810,longitude:137.01640,headquarters:"1-1 Asahi-machi, Kariya, Aichi",marketCapYen:706035565112,marketCapText:"¥0.71 trillion",industry:"Automotive and Industrial Machinery",business:"Manufacture and sale of steering systems, driveline components, bearings and machine tools.",founded:1921,employees:"43,233 (consolidated)",website:"https://www.jtekt.co.jp/e/",sourceUrlMarketCap:"https://finance.yahoo.co.jp/quote/6473.T",sourceUrlBusiness:"https://www.jtekt.co.jp/e/company/profile.html",sourceUrlHeadquarters:"https://www.jtekt.co.jp/e/company/profile.html",logo:"images/logos/jtekt.svg"},

  {name:"MARUWA Co., Ltd.",ticker:"5344",latitude:35.20020,longitude:137.03565,headquarters:"3-83 Minamihonjigahara-cho, Owariasahi, Aichi",marketCapYen:687140880000,marketCapText:"¥0.69 trillion",industry:"Ceramics and Electronic Components",business:"Production of ceramic materials, electronic components, semiconductor-related quartz products and lighting equipment.",founded:1946,employees:"1,309 (consolidated; verified 2023 figure)",website:"https://www.maruwa-g.com/e/",sourceUrlMarketCap:"https://finance.yahoo.co.jp/quote/5344.T",sourceUrlBusiness:"https://www.maruwa-g.com/e/company/business.html",sourceUrlHeadquarters:"https://web.maruwa-g.com/e/company/profile.html",logo:"images/logos/maruwa.svg"}
];

companies.sort((a,b)=>b.marketCapYen-a.marketCapYen);
companies.forEach((company,index)=>{company.rank=index+1; company.dataAsOf="2026-07-31";});
document.getElementById("dataDate").textContent=`Market capitalization data as of: ${companies[0].dataAsOf}`;

const map=L.map("map");
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"&copy; OpenStreetMap contributors"}).addTo(map);
const maxCap=Math.max(...companies.map(c=>c.marketCapYen));
const locations=[];
companies.forEach(c=>{
  const radius=6+18*Math.sqrt(c.marketCapYen/maxCap);
  const logo=c.logo?`<img src="${c.logo}" alt="${c.name} logo" class="img-fluid popup-logo mb-2">`:"";
  const popup=`<div class="company-popup">${logo}<p><strong>Rank:</strong> ${c.rank}</p><p><strong>Company:</strong> ${c.name}</p><p><strong>Market Capitalization:</strong> ${c.marketCapText}</p><p><strong>Main Business:</strong> ${c.business}</p></div>`;
  L.circleMarker([c.latitude,c.longitude],{radius,color:"#0d6efd",fillColor:"#0d6efd",fillOpacity:.55,weight:2}).addTo(map).bindPopup(popup);
  locations.push([c.latitude,c.longitude]);
});
map.fitBounds(locations,{padding:[30,30]});

const tableBody=document.getElementById("rankingTableBody");
companies.forEach(c=>{const row=document.createElement("tr");row.innerHTML=`<th>${c.rank}</th><td class="company-cell fw-semibold">${c.name}</td><td>${c.marketCapText}</td><td class="business-cell">${c.business}</td>`;tableBody.appendChild(row);});

const overview=document.getElementById("companyOverviewCards");
companies.forEach(c=>{const col=document.createElement("div");const logo=c.logo?`<div class="logo-box mb-3"><img src="${c.logo}" alt="${c.name} logo" class="img-fluid company-logo"></div>`:"";col.className="col-12 col-md-6 col-lg-4";col.innerHTML=`<article class="card"><div class="card-body">${logo}<h3 class="h5 card-title">${c.name}</h3><p class="mb-1"><strong>Rank:</strong> ${c.rank}</p><p class="mb-1"><strong>Market Capitalization:</strong> ${c.marketCapText}</p><p class="mb-0"><strong>Main Business:</strong> ${c.business}</p></div></article>`;overview.appendChild(col);});
