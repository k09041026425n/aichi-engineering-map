# Aichi Engineering Companies Market Capitalization Map

愛知県に本社を置く上場製造業のうち、2026年7月31日時点の時価総額上位10社を地図・表・カードで紹介する授業用Webページです。Bootstrap 5、Leaflet、OpenStreetMapを使用しています。

## 対象企業の定義

- 愛知県に本社または登記上の本店を置く上場会社
- 工業、製造業、機械、自動車、電子、材料メーカー
- 商社、金融、鉄道、小売、電力、通信は対象外
- Toyota Industries Corporationは基準日前に上場廃止となったため対象外

## 順位と時価総額

基準日: **2026-07-31**

時価総額は全社共通で次の式を使用しています。

```text
Market capitalization = closing share price × total issued shares
```

発行済株式数は自己株式を控除しない総発行済株式数です。株価と株式数は同じ基準日のYahoo! Finance Japan掲載値を使用し、株式分割前後の異なる基準を混在させていません。順位は`js/script.js`で時価総額の降順に自動付与します。

10位のMARUWAは約6,871億円、比較した次点のRinnaiは約5,052億円でした。

## 主な情報源

市場データ:

- [Yahoo! Finance Japan](https://finance.yahoo.co.jp/stocks/ranking/marketCapitalHigh?market=tokyo1)

会社情報、事業内容、所在地、創業年、従業員数:

- [Toyota Motor Corporation](https://global.toyota/en/company/profile/overview/)
- [DENSO Corporation](https://www.denso.com/global/en/about-us/corporate-info/profile/)
- [Niterra Co., Ltd.](https://www.niterragroup.com/english/corporate/profile/overview/index.html)
- [Aisin Corporation](https://www.aisin.com/en/profile/)
- [NGK Insulators, Ltd.](https://www.ngk-insulators.com/en/resource/pdf/info/company_en.pdf)
- [Makita Corporation](https://www.makita.biz/company/about/data/)
- [Brother Industries, Ltd.](https://global.brother/en/corporate/profile/outline)
- [Hoshizaki Corporation](https://www.hoshizaki.co.jp/en/company/profile.html)
- [JTEKT Corporation](https://www.jtekt.co.jp/e/company/profile.html)
- [MARUWA Co., Ltd.](https://www.maruwa-g.com/e/company/)

ロゴ欄は各社公式サイトまたは公式メディアから取得した画像をローカル表示します。各画像の権利はそれぞれの権利者に帰属します。画像を使用できない会社は会社名のみ表示されます。

### ロゴ画像の出典

ロゴ画像は `images/logos/` に保存しています。

- Toyota: [Toyota公式メディア画像](https://global.toyota/en/download/8404971)
- AISIN: [AISIN公式サイト](https://www.aisin.com/en/)
- NGK Insulators: [NGK Insulators公式サイト](https://www.ngk-insulators.com/en/)
- Makita: [Makita公式サイト](https://www.makita.biz/)
- Brother: [Brother公式サイト](https://global.brother/en/)
- JTEKT: [JTEKT公式サイト](https://www.jtekt.co.jp/e/)
- MARUWA: [MARUWA公式サイト](https://www.maruwa-g.com/e/)

DENSOは再利用可能な公式配布画像を確認できなかったため、会社名のみ表示します。Niterraは[公式利用規約](https://www.niterragroup.com/english/terms/)でロゴ利用に別途許可が必要と明記されているため、画像を使用していません。Hoshizakiは公式サイトの画像をローカル保存できなかったため、会社名のみ表示します。

地図座標は、各社公式サイトに記載された本社住所および公式アクセスマップと照合した地点です。背景地図はOpenStreetMapです。

## ファイル構成

```text
final_leaflet_site/
├── index.html
├── css/style.css
├── js/script.js
└── README.md
```

## 起動方法

```bash
python -m http.server 8000
```

`http://localhost:8000/final_leaflet_site/` をブラウザで開いてください。

## 注意

時価総額は株価により変動します。画面上の金額は読みやすいように丸めています。MARUWAの従業員数は公式資料で確認できた2023年3月時点の値です。AISINとNGK Insulatorsの従業員数は、今回確認した公式ページから基準の明確な値を取得できなかったため、推測せず `not verified` と表示しています。
