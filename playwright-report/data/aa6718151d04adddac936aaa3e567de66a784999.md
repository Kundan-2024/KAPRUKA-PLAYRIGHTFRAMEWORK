# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\search.spec.ts >> Add Cake to Cart >> valid user can add cake to cart and proceed to checkout
- Location: tests\e2e\search.spec.ts:7:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Strawberry Green Gateaux Vanilla Delight Cake') to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=f2e1]:
  - generic [ref=f2e3]:
    - link [ref=f2e5] [cursor=pointer]:
      - /url: https://www.kapruka.com
      - img "logo area" [ref=f2e6]
    - generic [ref=f2e10]:
      - textbox "SEARCH PRODUCTS.." [ref=f2e11]: cake
      - button "x" [ref=f2e12] [cursor=pointer]
      - button "online search" [ref=f2e13]:
        - img "Search" [ref=f2e14]
    - generic [ref=f2e15]:
      - combobox "Select Currency" [ref=f2e16]:
        - option "INR" [selected]
        - option "USD"
      - combobox "Select language" [ref=f2e17]:
        - option "Lang"
        - option "සිං"
        - option "Eng" [selected]
      - generic [ref=f2e18]:
        - generic:
          - link:
            - /url: /shops/checkout/deliveryCartViewPage.jsp
            - generic [ref=f2e19] [cursor=pointer]
      - link "Check Order Status" [ref=f2e25] [cursor=pointer]:
        - /url: https://www.kapruka.com/contactUs/orderStatus.jsp
        - img "status" [ref=f2e26]
      - link "Login to Your Account" [ref=f2e28] [cursor=pointer]:
        - /url: https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp
  - list [ref=f2e33]:
    - listitem [ref=f2e34]:
      - generic: All Categories
    - listitem [ref=f2e37]:
      - link "Event Icon Children's Day Offers" [ref=f2e38] [cursor=pointer]:
        - /url: https://www.kapruka.com/online/childrensday
        - img "Event Icon" [ref=f2e40]
        - generic [ref=f2e41]: Children's Day Offers
    - listitem [ref=f2e42]:
      - link "Event Icon Teachers' Day Offers" [ref=f2e43] [cursor=pointer]:
        - /url: https://www.kapruka.com/online/teachersday
        - img "Event Icon" [ref=f2e45]
        - generic [ref=f2e46]: Teachers' Day Offers
    - listitem [ref=f2e47]:
      - link "Same Day Rush delivery" [ref=f2e48] [cursor=pointer]:
        - /url: https://www.kapruka.com/online/samedaydelivery
        - img "Same Day" [ref=f2e50]
        - generic [ref=f2e51]: Rush delivery
    - listitem [ref=f2e52]:
      - link "On Sale" [ref=f2e53] [cursor=pointer]:
        - /url: https://www.kapruka.com/online/promotions
    - listitem [ref=f2e56]:
      - link "Events" [ref=f2e57] [cursor=pointer]:
        - /url: https://www.kapruka.com/shops/events_home.jsp
    - listitem [ref=f2e60]:
      - link "Brands" [ref=f2e61] [cursor=pointer]:
        - /url: https://www.kapruka.com/online_brands.jsp
    - listitem [ref=f2e64]:
      - link "For You" [ref=f2e65] [cursor=pointer]:
        - /url: https://www.kapruka.com/online/combogifts
  - generic [ref=f2e68]:
    - generic [ref=f2e69]:
      - heading "cakes Categories" [level=3] [ref=f2e70]
      - list [ref=f2e72]:
        - listitem [ref=f2e73]:
          - link "Home" [ref=f2e74] [cursor=pointer]:
            - /url: https://www.kapruka.com
        - listitem [ref=f2e76]:
          - link "/ cakes" [ref=f2e77] [cursor=pointer]:
            - /url: https://www.kapruka.com/online/cakes
      - tablist [ref=f2e78]:
        - link "All Items" [ref=f2e79] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes
        - link "Kapruka Cakes" [ref=f2e80] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes/price/kapruka_cakes
        - link "Java" [ref=f2e81] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes/price/java
        - link "Divine" [ref=f2e82] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes/price/divine
        - link "Gerard Mendis Chocolatier" [ref=f2e83] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes/price/gerard_mendis_chocolatier
        - link "Bread Talk" [ref=f2e84] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes/price/bread_talk
        - link "Colombo Hilton" [ref=f2e85] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes/price/colombo_hilton
        - link "T-lounge By Dilmah" [ref=f2e86] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes/price/t-lounge_by_dilmah
        - link "Kandy Myst By Cinnamon" [ref=f2e87] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes/price/kandy_myst_by_cinnamon
        - link "Amari Colombo" [ref=f2e88] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes/price/amari_colombo
        - link "Cinnamon Grand" [ref=f2e89] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes/price/cinnamon_grand
        - link "Waters Edge" [ref=f2e90] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes/price/waters_edge
        - link "Kingsbury" [ref=f2e91] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes/price/kingsbury
        - link "Sponge" [ref=f2e92] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes/price/sponge
        - link "Nh Collection Colombo" [ref=f2e93] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes/price/nh_collection_colombo
        - link "Cinnamon Lakeside" [ref=f2e94] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes/price/cinnamon_lakeside
        - link "Courtyard By Marriott" [ref=f2e95] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes/price/courtyard_by_marriott
        - link "Topaz Kandy" [ref=f2e96] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes/price/topaz_kandy
        - 'link "Earl`s Regent Hotel" [ref=f2e97] [cursor=pointer]':
          - /url: "https://www.kapruka.com/online/cakes/price/earl`s_regent_hotel"
        - link "Caravan Fresh" [ref=f2e98] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes/price/caravan_fresh
        - link "Shangri-la" [ref=f2e99] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes/price/shangri-la
        - link "Green Cabin" [ref=f2e100] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes/price/green_cabin
        - link "Ramada" [ref=f2e101] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes/price/ramada
        - text: Related Categories
        - link "Custom Printed Cakes" [ref=f2e102] [cursor=pointer]:
          - /url: https://www.kapruka.com/shops/cakes/customCakes/customCakesStep1.jsp
        - link "Customized Cakes" [ref=f2e103] [cursor=pointer]:
          - /url: https://www.kapruka.com/shops/cakes/customCakes/personalise_cakes.jsp
      - generic [ref=f2e104]:
        - heading "Price Filter" [level=3] [ref=f2e105]
        - generic [ref=f2e106]:
          - generic [ref=f2e107] [cursor=pointer]: Best Sellers
          - generic [ref=f2e109] [cursor=pointer]: Low to High
          - generic [ref=f2e111] [cursor=pointer]: High to Low
    - generic [ref=f2e113]:
      - generic [ref=f2e115]:
        - heading "Cake Delivery Sri Lanka | Same-Day Birthday & Hotel Cakes" [level=1] [ref=f2e116]
        - emphasis [ref=f2e117]: Order birthday cakes, chocolate fudge, bento cakes, hotel cakes from Hilton, Cinnamon Grand, Kingsbury. Same-day delivery across Sri Lanka.
      - generic [ref=f2e118]:
        - link "Top Choices 4.22 Lbs Strawberry Chocolate Mousse Cake Buy Cake Delivery Online for specialGifts Strawberry Chocolate Mousse Cake US$46.85 ≈ ₹4,436" [ref=f2e120] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/strawberry-chocolate-mousse-ca/kid/cake00ka002012
          - generic [ref=f2e121]: Top Choices
          - generic [ref=f2e122]: 4.22 Lbs
          - img "Strawberry Chocolate Mousse Cake Buy Cake Delivery Online for specialGifts" [ref=f2e123]
          - generic [ref=f2e124]:
            - generic [ref=f2e125]: Strawberry Chocolate Mousse Cake
            - generic [ref=f2e126]: US$46.85 ≈ ₹4,436
        - link "Top Choices 0.88 Lbs Blue Butterfly Bliss Ribbon Bento Cake Buy Cake Delivery Online for specialGifts Blue Butterfly Bliss Ribbon Bento Cake US$12.25 ≈ ₹1,160" [ref=f2e130] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/blue-butterfly-bliss-ribbon-be/kid/cake00ka002172
          - generic [ref=f2e131]: Top Choices
          - generic [ref=f2e132]: 0.88 Lbs
          - img "Blue Butterfly Bliss Ribbon Bento Cake Buy Cake Delivery Online for specialGifts" [ref=f2e133]
          - generic [ref=f2e134]:
            - generic [ref=f2e135]: Blue Butterfly Bliss Ribbon Bento Cake
            - generic [ref=f2e136]: US$12.25 ≈ ₹1,160
        - link "Top Choices 3.33 Lbs Monsters University Celebration Ribbon Cake Buy Cake Delivery Online for specialGifts Monsters University Celebration Ribbon Cake US$44.91 ≈ ₹4,252" [ref=f2e140] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/monsters-university-celebratio/kid/cake00ka001961
          - generic [ref=f2e141]: Top Choices
          - generic [ref=f2e142]: 3.33 Lbs
          - img "Monsters University Celebration Ribbon Cake Buy Cake Delivery Online for specialGifts" [ref=f2e143]
          - generic [ref=f2e144]:
            - generic [ref=f2e145]: Monsters University Celebration Ribbon Cake
            - generic [ref=f2e146]: US$44.91 ≈ ₹4,252
        - link "Top Choices 2.22 Lbs Simple Joy Ribbon Cake Buy Cake Delivery Online for specialGifts Simple Joy Ribbon Cake US$13.23 ≈ ₹1,252" [ref=f2e150] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/simple-joy-ribbon-cake/kid/cake00ka002137
          - generic [ref=f2e151]: Top Choices
          - generic [ref=f2e152]: 2.22 Lbs
          - img "Simple Joy Ribbon Cake Buy Cake Delivery Online for specialGifts" [ref=f2e153]
          - generic [ref=f2e154]:
            - generic [ref=f2e155]: Simple Joy Ribbon Cake
            - generic [ref=f2e156]: US$13.23 ≈ ₹1,252
        - link "Top Choices 2.75 Lbs Java Black Cherry Cheese Cake Buy Cake Delivery Online for specialGifts Java Black Cherry Cheese Cake US$39.07 ≈ ₹3,699" [ref=f2e160] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/java-black-cherry-cheese-cake/kid/cakejava00280
          - generic [ref=f2e161]: Top Choices
          - generic [ref=f2e162]: 2.75 Lbs
          - img "Java Black Cherry Cheese Cake Buy Cake Delivery Online for specialGifts" [ref=f2e163]
          - generic [ref=f2e164]:
            - generic [ref=f2e165]: Java Black Cherry Cheese Cake
            - generic [ref=f2e166]: US$39.07 ≈ ₹3,699
        - link "Top Choices 2.2 Lbs Fresh Strawberry Cheese Cake(GMC) Buy Cake Delivery Online for specialGifts Fresh Strawberry Cheese Cake(GMC) US$44.39 ≈ ₹4,203" [ref=f2e170] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/fresh-strawberry-cheese-cake-g/kid/cakegmc00118
          - generic [ref=f2e171]: Top Choices
          - generic [ref=f2e172]: 2.2 Lbs
          - img "Fresh Strawberry Cheese Cake(GMC) Buy Cake Delivery Online for specialGifts" [ref=f2e173]
          - generic [ref=f2e174]:
            - generic [ref=f2e175]: Fresh Strawberry Cheese Cake(GMC)
            - generic [ref=f2e176]: US$44.39 ≈ ₹4,203
        - link "Top Choices 2.2 lbs Lbs Hilton Mocha Delight Buy Cake Delivery Online for specialGifts Hilton Mocha Delight US$24.50 ≈ ₹2,320" [ref=f2e180] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/hilton-mocha-delight/kid/cakehtn00240
          - generic [ref=f2e181]: Top Choices
          - generic [ref=f2e182]: 2.2 lbs Lbs
          - img "Hilton Mocha Delight Buy Cake Delivery Online for specialGifts" [ref=f2e183]
          - generic [ref=f2e184]:
            - generic [ref=f2e185]: Hilton Mocha Delight
            - generic [ref=f2e186]: US$24.50 ≈ ₹2,320
        - link "Top Choices 2 Lbs BreadTalk Double Chocolate (2 LB) Buy Cake Delivery Online for specialGifts BreadTalk Double Chocolate (2 LB) US$29.97 ≈ ₹2,838" [ref=f2e190] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/breadtalk-double-chocolate-2-lb/kid/cakebt00297
          - generic [ref=f2e191]: Top Choices
          - generic [ref=f2e192]: 2 Lbs
          - img "BreadTalk Double Chocolate (2 LB) Buy Cake Delivery Online for specialGifts" [ref=f2e193]
          - generic [ref=f2e194]:
            - generic [ref=f2e195]: BreadTalk Double Chocolate (2 LB)
            - generic [ref=f2e196]: US$29.97 ≈ ₹2,838
        - link "Top Choices 2.2 Lbs Cinnamon Grand Milk Chocolate Chip cake Buy Cake Delivery Online for specialGifts Cinnamon Grand Milk Chocolate Chip Cake US$26.29 ≈ ₹2,489" [ref=f2e200] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/cinnamon-grand-milk-chocolate-/kid/cakecg00142
          - generic [ref=f2e201]: Top Choices
          - generic [ref=f2e202]: 2.2 Lbs
          - img "Cinnamon Grand Milk Chocolate Chip cake Buy Cake Delivery Online for specialGifts" [ref=f2e203]
          - generic [ref=f2e204]:
            - generic [ref=f2e205]: Cinnamon Grand Milk Chocolate Chip Cake
            - generic [ref=f2e206]: US$26.29 ≈ ₹2,489
        - link "Top Choices 2.22 Lbs Kandy Myst By Cinnamon Chocolate Fudge Brownie cake Buy Cake Delivery Online for specialGifts Kandy Myst By Cinnamon Chocolate Fudge Brownie Cake US$43.41 ≈ ₹4,110" [ref=f2e210] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/kandy-myst-by-cinnamon-chocola/kid/cakekmc00104
          - generic [ref=f2e211]: Top Choices
          - generic [ref=f2e212]: 2.22 Lbs
          - img "Kandy Myst By Cinnamon Chocolate Fudge Brownie cake Buy Cake Delivery Online for specialGifts" [ref=f2e213]
          - generic [ref=f2e214]:
            - generic [ref=f2e215]: Kandy Myst By Cinnamon Chocolate Fudge Brownie Cake
            - generic [ref=f2e216]: US$43.41 ≈ ₹4,110
        - 'link "Top Choices 2.22 Lbs Earl`s regent mocha mirror cake Buy Cake Delivery Online for specialGifts Earl`s Regent Mocha Mirror Cake US$25.28 ≈ ₹2,394" [ref=f2e220] [cursor=pointer]':
          - /url: https://www.kapruka.com/buyonline/earl-s-regent-mocha-mirror-cake/kid/cakeerk0096
          - generic [ref=f2e221]: Top Choices
          - generic [ref=f2e222]: 2.22 Lbs
          - 'img "Earl`s regent mocha mirror cake Buy Cake Delivery Online for specialGifts" [ref=f2e223]'
          - generic [ref=f2e224]:
            - generic [ref=f2e225]: "Earl`s Regent Mocha Mirror Cake"
            - generic [ref=f2e226]: US$25.28 ≈ ₹2,394
        - link "Top Choices 2.22 Lbs Waters edge Brownie Mousse Cake Buy Cake Delivery Online for specialGifts Waters Edge Brownie Mousse Cake US$32.42 ≈ ₹3,070" [ref=f2e230] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/waters-edge-brownie-mousse-cake/kid/cakewe00214
          - generic [ref=f2e231]: Top Choices
          - generic [ref=f2e232]: 2.22 Lbs
          - img "Waters edge Brownie Mousse Cake Buy Cake Delivery Online for specialGifts" [ref=f2e233]
          - generic [ref=f2e234]:
            - generic [ref=f2e235]: Waters Edge Brownie Mousse Cake
            - generic [ref=f2e236]: US$32.42 ≈ ₹3,070
        - link "3.1 Lbs Snow Stripes Brownie Cake Buy Cake Delivery Online for specialGifts Snow Stripes Brownie Cake US$25.16 ≈ ₹2,382" [ref=f2e240] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/snow-stripes-brownie-cake/kid/cake00ka001082
          - generic [ref=f2e241]: 3.1 Lbs
          - img "Snow Stripes Brownie Cake Buy Cake Delivery Online for specialGifts" [ref=f2e242]
          - generic [ref=f2e243]:
            - generic [ref=f2e244]: Snow Stripes Brownie Cake
            - generic [ref=f2e245]: US$25.16 ≈ ₹2,382
        - link "3.52 Lbs Kapruka Blueberry Cheese Cake Buy Cake Delivery Online for specialGifts Kapruka Blueberry Cheese Cake US$46.29 ≈ ₹4,383" [ref=f2e249] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/kapruka-blueberry-cheese-cake/kid/cake00ka001264
          - generic [ref=f2e250]: 3.52 Lbs
          - img "Kapruka Blueberry Cheese Cake Buy Cake Delivery Online for specialGifts" [ref=f2e251]
          - generic [ref=f2e252]:
            - generic [ref=f2e253]: Kapruka Blueberry Cheese Cake
            - generic [ref=f2e254]: US$46.29 ≈ ₹4,383
        - link "2.20 Lbs Heavenly Chocolate Fudge Cake Buy Cake Delivery Online for specialGifts Heavenly Chocolate Fudge Cake US$17.22 ≈ ₹1,630" [ref=f2e258] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/heavenly-chocolate-fudge-cake/kid/cake00ka001353
          - generic [ref=f2e259]: 2.20 Lbs
          - img "Heavenly Chocolate Fudge Cake Buy Cake Delivery Online for specialGifts" [ref=f2e260]
          - generic [ref=f2e261]:
            - generic [ref=f2e262]: Heavenly Chocolate Fudge Cake
            - generic [ref=f2e263]: US$17.22 ≈ ₹1,630
        - link "2.31 Lbs Strawberry Blast Sponge Cake Buy Cake Delivery Online for specialGifts Strawberry Blast Sponge Cake US$27.78 ≈ ₹2,630" [ref=f2e267] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/strawberry-blast-sponge-cake/kid/cake00ka001449
          - generic [ref=f2e268]: 2.31 Lbs
          - img "Strawberry Blast Sponge Cake Buy Cake Delivery Online for specialGifts" [ref=f2e269]
          - generic [ref=f2e270]:
            - generic [ref=f2e271]: Strawberry Blast Sponge Cake
            - generic [ref=f2e272]: US$27.78 ≈ ₹2,630
        - link "2.31 Lbs Chocolate Delight Sponge Cake Buy Cake Delivery Online for specialGifts Chocolate Delight Sponge Cake US$19.55 ≈ ₹1,851" [ref=f2e276] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/chocolate-delight-sponge-cake/kid/cake00ka001450
          - generic [ref=f2e277]: 2.31 Lbs
          - img "Chocolate Delight Sponge Cake Buy Cake Delivery Online for specialGifts" [ref=f2e278]
          - generic [ref=f2e279]:
            - generic [ref=f2e280]: Chocolate Delight Sponge Cake
            - generic [ref=f2e281]: US$19.55 ≈ ₹1,851
        - link "2.66 lbs Lbs Twilight Berries - Black Velvet Chocolate Gateau Cake Buy Cake Delivery Online for specialGifts Twilight Berries - Black Velvet Chocolate Gateau Cake US$36.15 ≈ ₹3,423" [ref=f2e285] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/twilight-berries-black-velvet-/kid/cake00ka001551
          - generic [ref=f2e286]: 2.66 lbs Lbs
          - img "Twilight Berries - Black Velvet Chocolate Gateau Cake Buy Cake Delivery Online for specialGifts" [ref=f2e287]
          - generic [ref=f2e288]:
            - generic [ref=f2e289]: Twilight Berries - Black Velvet Chocolate Gateau Cake
            - generic [ref=f2e290]: US$36.15 ≈ ₹3,423
        - link "2.2 lbs Lbs Fruit Medley Delight Gateau Cake Buy Cake Delivery Online for specialGifts Fruit Medley Delight Gateau Cake US$22.36 ≈ ₹2,117" [ref=f2e294] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/fruit-medley-delight-gateau-ca/kid/cake00ka001558
          - generic [ref=f2e295]: 2.2 lbs Lbs
          - img "Fruit Medley Delight Gateau Cake Buy Cake Delivery Online for specialGifts" [ref=f2e296]
          - generic [ref=f2e297]:
            - generic [ref=f2e298]: Fruit Medley Delight Gateau Cake
            - generic [ref=f2e299]: US$22.36 ≈ ₹2,117
        - link "2.2 lbs Lbs Floral Fantasy Happy Birthday Cake Buy Cake Delivery Online for specialGifts Floral Fantasy Happy Birthday Cake US$22.04 ≈ ₹2,087" [ref=f2e303] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/floral-fantasy-happy-birthday-/kid/cake00ka001562
          - generic [ref=f2e304]: 2.2 lbs Lbs
          - img "Floral Fantasy Happy Birthday Cake Buy Cake Delivery Online for specialGifts" [ref=f2e305]
          - generic [ref=f2e306]:
            - generic [ref=f2e307]: Floral Fantasy Happy Birthday Cake
            - generic [ref=f2e308]: US$22.04 ≈ ₹2,087
        - link "1.33 lbs Lbs Love Struck Heart Shape Gateau Cake Buy Cake Delivery Online for specialGifts Love Struck Heart Shape Gateau Cake US$23.46 ≈ ₹2,221" [ref=f2e312] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/love-struck-heart-shape-gateau/kid/cake00ka001597
          - generic [ref=f2e313]: 1.33 lbs Lbs
          - img "Love Struck Heart Shape Gateau Cake Buy Cake Delivery Online for specialGifts" [ref=f2e314]
          - generic [ref=f2e315]:
            - generic [ref=f2e316]: Love Struck Heart Shape Gateau Cake
            - generic [ref=f2e317]: US$23.46 ≈ ₹2,221
        - link "4.44 Lbs Floral Square Elegance Ribbon Cake Buy Cake Delivery Online for specialGifts Floral Square Elegance Ribbon Cake US$28.89 ≈ ₹2,735" [ref=f2e321] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/floral-square-elegance-ribbon-/kid/cake00ka001612
          - generic [ref=f2e322]: 4.44 Lbs
          - img "Floral Square Elegance Ribbon Cake Buy Cake Delivery Online for specialGifts" [ref=f2e323]
          - generic [ref=f2e324]:
            - generic [ref=f2e325]: Floral Square Elegance Ribbon Cake
            - generic [ref=f2e326]: US$28.89 ≈ ₹2,735
        - link "4 Lbs Pastel Pink Perfection Ribbon Tower Cake Buy Cake Delivery Online for specialGifts Pastel Pink Perfection Ribbon Tower Cake US$46.29 ≈ ₹4,383" [ref=f2e330] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/pastel-pink-perfection-ribbon-/kid/cake00ka001674
          - generic [ref=f2e331]: 4 Lbs
          - img "Pastel Pink Perfection Ribbon Tower Cake Buy Cake Delivery Online for specialGifts" [ref=f2e332]
          - generic [ref=f2e333]:
            - generic [ref=f2e334]: Pastel Pink Perfection Ribbon Tower Cake
            - generic [ref=f2e335]: US$46.29 ≈ ₹4,383
        - link "2.22 Lbs Triple Delight Gateau cake Buy Cake Delivery Online for specialGifts Triple Delight Gateau Cake US$20.69 ≈ ₹1,959" [ref=f2e339] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/triple-delight-gateau-cake/kid/cake00ka001679
          - generic [ref=f2e340]: 2.22 Lbs
          - img "Triple Delight Gateau cake Buy Cake Delivery Online for specialGifts" [ref=f2e341]
          - generic [ref=f2e342]:
            - generic [ref=f2e343]: Triple Delight Gateau Cake
            - generic [ref=f2e344]: US$20.69 ≈ ₹1,959
        - link "3.88 Lbs Rainbow Magic Cake Buy Cake Delivery Online for specialGifts Rainbow Magic Cake US$31.78 ≈ ₹3,009" [ref=f2e348] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/rainbow-magic-cake/kid/cake00ka001728
          - generic [ref=f2e349]: 3.88 Lbs
          - img "Rainbow Magic Cake Buy Cake Delivery Online for specialGifts" [ref=f2e350]
          - generic [ref=f2e351]:
            - generic [ref=f2e352]: Rainbow Magic Cake
            - generic [ref=f2e353]: US$31.78 ≈ ₹3,009
        - link "2.77 Lbs Floral Pink Petal Bliss Ribbon Cake Buy Cake Delivery Online for specialGifts Floral Pink Petal Bliss Ribbon Cake US$21.64 ≈ ₹2,049" [ref=f2e357] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/floral-pink-petal-bliss-ribbon/kid/cake00ka001733
          - generic [ref=f2e358]: 2.77 Lbs
          - img "Floral Pink Petal Bliss Ribbon Cake Buy Cake Delivery Online for specialGifts" [ref=f2e359]
          - generic [ref=f2e360]:
            - generic [ref=f2e361]: Floral Pink Petal Bliss Ribbon Cake
            - generic [ref=f2e362]: US$21.64 ≈ ₹2,049
        - link "1.88 Lbs Kalo cookie crunch cheese cake Buy Cake Delivery Online for specialGifts Kalo Cookie Crunch Cheese Cake US$31.48 ≈ ₹2,981" [ref=f2e366] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/kalo-cookie-crunch-cheese-cake/kid/cake00ka001741
          - generic [ref=f2e367]: 1.88 Lbs
          - img "Kalo cookie crunch cheese cake Buy Cake Delivery Online for specialGifts" [ref=f2e368]
          - generic [ref=f2e369]:
            - generic [ref=f2e370]: Kalo Cookie Crunch Cheese Cake
            - generic [ref=f2e371]: US$31.48 ≈ ₹2,981
        - link "2.66 Lbs Rose Garden 3D Ribbon Cake Buy Cake Delivery Online for specialGifts Rose Garden 3D Ribbon Cake US$22.96 ≈ ₹2,174" [ref=f2e375] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/rose-garden-3d-ribbon-cake/kid/cake00ka001747
          - generic [ref=f2e376]: 2.66 Lbs
          - img "Rose Garden 3D Ribbon Cake Buy Cake Delivery Online for specialGifts" [ref=f2e377]
          - generic [ref=f2e378]:
            - generic [ref=f2e379]: Rose Garden 3D Ribbon Cake
            - generic [ref=f2e380]: US$22.96 ≈ ₹2,174
        - link "2.22 Lbs Golden Chocolate Luxe Gateau Cake Buy Cake Delivery Online for specialGifts Golden Chocolate Luxe Gateau Cake US$21.86 ≈ ₹2,070" [ref=f2e384] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/golden-chocolate-luxe-gateau-c/kid/cake00ka001748
          - generic [ref=f2e385]: 2.22 Lbs
          - img "Golden Chocolate Luxe Gateau Cake Buy Cake Delivery Online for specialGifts" [ref=f2e386]
          - generic [ref=f2e387]:
            - generic [ref=f2e388]: Golden Chocolate Luxe Gateau Cake
            - generic [ref=f2e389]: US$21.86 ≈ ₹2,070
        - link "1.88 Lbs Blueberry Cashew Bliss Cheese Cake Buy Cake Delivery Online for specialGifts Blueberry Cashew Bliss Cheese Cake US$31.48 ≈ ₹2,981" [ref=f2e393] [cursor=pointer]:
          - /url: https://www.kapruka.com/buyonline/blueberry-cashew-bliss-cheese-/kid/cake00ka001749
          - generic [ref=f2e394]: 1.88 Lbs
          - img "Blueberry Cashew Bliss Cheese Cake Buy Cake Delivery Online for specialGifts" [ref=f2e395]
          - generic [ref=f2e396]:
            - generic [ref=f2e397]: Blueberry Cashew Bliss Cheese Cake
            - generic [ref=f2e398]: US$31.48 ≈ ₹2,981
      - generic [ref=f2e401]: Showing 1 - 30 of 941 total
      - generic [ref=f2e405]: See More Products
    - generic [ref=f2e407]:
      - heading "Top cakes Products on Kapruka" [level=2] [ref=f2e408]
      - paragraph [ref=f2e409]: Order birthday cakes, chocolate fudge, bento cakes, hotel cakes from Hilton, Cinnamon Grand, Kingsbury. Same-day delivery across Sri Lanka.
    - generic [ref=f2e413]:
      - generic [ref=f2e414]:
        - heading "What types of cakes are available in Sri Lanka? ?" [level=3] [ref=f2e415]
        - text: Kapruka offers a variety of
        - link "cakes" [ref=f2e416] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes
        - text: including birthday, anniversary, and custom designs.
      - generic [ref=f2e417]:
        - heading "How can I order a cake online in Sri Lanka? ?" [level=3] [ref=f2e418]
        - text: Visit Kapruka's website to browse and order a wide selection of
        - link "cakes" [ref=f2e419] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes
        - text: online.
      - generic [ref=f2e420]:
        - heading "Where can I find eggless cakes in Sri Lanka? ?" [level=3] [ref=f2e421]
        - text: Kapruka provides options for eggless
        - link "cakes" [ref=f2e422] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes
        - text: available for online order.
      - generic [ref=f2e423]:
        - heading "What is the price range for cakes in Sri Lanka? ?" [level=3] [ref=f2e424]
        - text: Prices vary based on design and size, offering competitive options for all budgets.
      - generic [ref=f2e425]:
        - heading "Can I order a birthday cake for delivery in Sri Lanka? ?" [level=3] [ref=f2e426]
        - text: Yes, Kapruka offers birthday cake delivery across Sri Lanka.
      - generic [ref=f2e427]:
        - heading "What are some popular cake brands in Sri Lanka? ?" [level=3] [ref=f2e428]
        - text: Brands include Gerard, Java, and Galadari, available at Kapruka.
      - generic [ref=f2e429]:
        - heading "Are there custom cake options available? ?" [level=3] [ref=f2e430]
        - text: Yes, custom cake designs can be ordered for special occasions through Kapruka.
      - generic [ref=f2e431]:
        - heading "How do I find cupcake prices in Sri Lanka? ?" [level=3] [ref=f2e432]
        - text: Cupcake prices are listed on Kapruka’s website under the cake section.
      - generic [ref=f2e433]:
        - heading "What are some trending cake designs available? ?" [level=3] [ref=f2e434]
        - text: Trending designs include floral, themed, and edible print
        - link "cakes" [ref=f2e435] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes
        - text: .
      - generic [ref=f2e436]:
        - heading "Is there a delivery option for cakes in Colombo? ?" [level=3] [ref=f2e437]
        - text: Kapruka delivers
        - link "cakes" [ref=f2e438] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes
        - text: throughout Sri Lanka, including Colombo.
      - generic [ref=f2e439]:
        - heading "How do I know if the cake will be fresh upon delivery? ?" [level=3] [ref=f2e440]
        - text: Kapruka takes great care to ensure the freshness and quality of their
        - link "cakes" [ref=f2e441] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes
        - text: during delivery.
        - link "cakes" [ref=f2e442] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes
        - text: are often packaged securely and delivered in air condition vehicles to maintain freshness. Additionally, you can check our reviews and customer feedback to gauge our reputation for delivering fresh and delicious
        - link "cakes" [ref=f2e443] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/cakes
      - generic [ref=f2e444]:
        - heading "How do I place an order for a cake online? ?" [level=3] [ref=f2e445]
        - text: Ordering a cake online is simple. Visit the Kapruka website, browse through our cake options, select the desired cake, specify customization options if available, and proceed to checkout.
      - generic [ref=f2e446]:
        - heading "How far in advance should I order a cake online? ?" [level=3] [ref=f2e447]
        - text: "It`s advisable to order your cake online in advance, especially for special occasions or during peak seasons. Ordering at least a few days in advance ensures that the we have enough time schedule delivery or pickup according to your preferences"
      - generic [ref=f2e448]:
        - heading "Is delivery available to any address for online cake orders? ?" [level=3] [ref=f2e449]
        - text: "Yes, Kapruka offer delivery services for cake orders for any address in Sri Lanka. Delivery options may vary depending on your location. We offer same-day or next-day delivery, so it`s best to check the delivery options and schedule when placing your order."
  - generic [ref=f2e451]:
    - paragraph [ref=f2e453]:
      - text: Welcome to Kapruka's cake collection, where Sri Lanka's finest bakeries and creative designers come together to make every celebration unforgettable. Whether you're searching for a show-stopping birthday centerpiece, elegant anniversary treat, or a trendy bento cake for intimate occasions, our selection delivers freshness, quality, and island-wide convenience. From classic
      - link "sponge cakes" [ref=f2e454] [cursor=pointer]:
        - /url: https://www.kapruka.com/online/cakes/price/sponge
      - text: to artisan creations from premium hotels, we partner with trusted bakeries to bring you cakes that taste as beautiful as they look. Order online and enjoy reliable delivery across Colombo, Kandy, Galle, and beyond—making it effortless to surprise loved ones near or far.
    - paragraph [ref=f2e456]:
      - text: Finding the perfect cake starts with understanding your occasion and guest count. Birthday cakes remain our most popular choice, available in sizes from individual servings to multi-tier designs that serve dozens. Bento cakes have surged in popularity for their compact elegance—ideal for couples, small gatherings, or personalized messages. Browse offerings from renowned establishments like
      - link "Mount Lavinia Hotel" [ref=f2e457] [cursor=pointer]:
        - /url: https://www.kapruka.com/online/cakes/price/mount_lavinia_hotel/lanka/general
      - text: and
      - link "t-Lounge by Dilmah" [ref=f2e458] [cursor=pointer]:
        - /url: https://www.kapruka.com/online/cakes/price/t-lounge_by_dilmah/lanka/general
      - text: for gourmet flavors, or explore themed
      - link "Paw Patrol cupcakes" [ref=f2e459] [cursor=pointer]:
        - /url: https://www.kapruka.com/buyonline/paw-petrol-cupcakes-12-pieces/kid/cake00ka001339
      - text: and
      - link "playful animal cupcakes" [ref=f2e460] [cursor=pointer]:
        - /url: https://www.kapruka.com/buyonline/playful-animals-cupcakes-12-pi/kid/cake00ka001336
      - text: for children's parties. Each product page displays detailed descriptions, dietary information, and customer reviews to help you decide with confidence.
    - paragraph [ref=f2e462]:
      - text: Cakes mark life's sweetest moments—birthdays, weddings, anniversaries, graduations, and spontaneous celebrations alike. Seasonal favorites include festive
      - link "Christmas cakes from Cinnamon Grand" [ref=f2e463] [cursor=pointer]:
        - /url: https://www.kapruka.com/online/cakes/price/cinnamon_grand/lanka/christmas
      - text: that blend traditional fruit cake richness with modern presentation. Corporate clients appreciate our cupcake gift sets for employee recognition and client appreciation events. Kapruka's same-day and scheduled delivery options ensure your cake arrives fresh exactly when needed, whether you're planning weeks ahead or celebrating a last-minute milestone. Filter by flavor, size, dietary preference, or bakery to discover the ideal cake that transforms your occasion into a cherished memory.
  - contentinfo [ref=f2e464]:
    - generic [ref=f2e465]:
      - heading "ORDER ON WHATSAPP" [level=4] [ref=f2e466]
      - paragraph [ref=f2e467]: Tell us what you need - we'll find it, price it, and deliver it. Open 24/7.
      - link "Sri Lankan Largest online Shopping Order by WhatsApp" [ref=f2e469] [cursor=pointer]:
        - /url: https://wa.me/94711222002?text=Hello%20Kapruka%2C%20I%20want%20to%20place%20an%20order
        - img "Sri Lankan Largest online Shopping" [ref=f2e471]
        - generic [ref=f2e472]: Order by WhatsApp
    - generic [ref=f2e473]:
      - generic [ref=f2e475]:
        - generic [ref=f2e476]: "SL:"
        - generic [ref=f2e477]:
          - text: 147 Old Kottawa Road, Nugegoda 10250, Sri Lanka
          - paragraph [ref=f2e478]:
            - text: "24/7 Hotline:"
            - link "+94117551111" [ref=f2e479] [cursor=pointer]:
              - /url: tel:+94117551111
          - text: "email:"
          - link "colombo.office@kapruka.com" [ref=f2e480] [cursor=pointer]:
            - /url: https://www.kapruka.com/contactUs/onlineHelpForm.jsp
          - link [ref=f2e481] [cursor=pointer]:
            - /url: https://wa.me/94711222002
            - img "whatsapp support in kapruka" [ref=f2e482]
          - text: "Whatsapp Support:"
          - link "+94711222002" [ref=f2e483] [cursor=pointer]:
            - /url: https://wa.me/94711222002
      - generic [ref=f2e485]:
        - generic [ref=f2e486]: "USA:"
        - generic [ref=f2e487]:
          - text: "4364 Cranwood Parkway,Warrensville Heights,OH,44128, USA(Phone: +1-888-502-5244) email:"
          - link "lexingtonky.office@kapruka.com" [ref=f2e488] [cursor=pointer]:
            - /url: https://www.kapruka.com/contactUs/onlineHelpForm.jsp
      - generic [ref=f2e490]:
        - generic [ref=f2e491]: "UK:"
        - generic [ref=f2e492]:
          - text: "145-157 St John Street, LondonEC1V 4PY, United Kingdom(Phone: +44-203-769-0961) email:"
          - link "london.office@kapruka.com" [ref=f2e493] [cursor=pointer]:
            - /url: https://www.kapruka.com/contactUs/onlineHelpForm.jsp
      - generic [ref=f2e495]:
        - generic [ref=f2e496]: "AUS:"
        - generic [ref=f2e497]:
          - text: "440 Collins StLevel 9,#331,Melbourne VIC 3000(Phone: +61-391-112-322) email:"
          - link "melbourne.office@kapruka.com" [ref=f2e498] [cursor=pointer]:
            - /url: https://www.kapruka.com/contactUs/onlineHelpForm.jsp
    - generic [ref=f2e499]:
      - link [ref=f2e501] [cursor=pointer]:
        - /url: "https://partnercentral.kapruka.com/ "
        - img "Sell With Kapruka" [ref=f2e502]
      - generic [ref=f2e503]:
        - text: Download
        - link "Kapruka App" [ref=f2e504] [cursor=pointer]:
          - /url: https://www.kapruka.com/contactUs/downloadapp.jsp
      - link [ref=f2e505] [cursor=pointer]:
        - /url: https://apps.apple.com/us/app/kapruka/id1367410203
        - img "kapruka online app" [ref=f2e506]
      - link [ref=f2e507] [cursor=pointer]:
        - /url: https://play.google.com/store/apps/details?id=com.kapruka.kaprukamobile
        - img "kapruka online app" [ref=f2e508]
    - paragraph [ref=f2e509]:
      - link "Read About Kapruka" [ref=f2e510] [cursor=pointer]:
        - /url: https://www.kapruka.com/contactUs/about.html
      - text: "|"
      - link "Reviews" [ref=f2e511] [cursor=pointer]:
        - /url: https://www.kapruka.com/contactUs/kapruka_reviews.jsp
      - text: "|"
      - link "Refund & Returns" [ref=f2e512] [cursor=pointer]:
        - /url: https://www.kapruka.com/shop/returns-refunds-and-other-policies-of-kapruka
      - text: "|"
      - link "Careers" [ref=f2e513] [cursor=pointer]:
        - /url: https://blog.kapruka.com/kapruka_careers
      - text: "|"
      - link "FAQs" [ref=f2e514] [cursor=pointer]:
        - /url: https://www.kapruka.com/shop/faq
    - paragraph [ref=f2e515]:
      - link "Lanka Copyright" [ref=f2e516] [cursor=pointer]:
        - /url: https://kapruka.com/sitemap.xml
        - generic [ref=f2e517]: 
      - text: Kapruka.com Online Shopping for
      - link "Sri Lankans" [ref=f2e518] [cursor=pointer]:
        - /url: https://en.wikipedia.org/wiki/Sri_Lanka
      - text: around the world.
      - link "SL" [ref=f2e519] [cursor=pointer]:
        - /url: https://www.kapruka.com/lk/online/cakes
      - link "AU" [ref=f2e520] [cursor=pointer]:
        - /url: https://www.kapruka.com/au/online/cakes
      - link "UK" [ref=f2e521] [cursor=pointer]:
        - /url: https://www.kapruka.com/uk/online/cakes
      - link "UAE" [ref=f2e522] [cursor=pointer]:
        - /url: https://www.kapruka.com/uae/online/cakes
      - link "CA" [ref=f2e523] [cursor=pointer]:
        - /url: https://www.kapruka.com/ca/online/cakes
    - generic [ref=f2e525]:
      - link [ref=f2e526] [cursor=pointer]:
        - /url: https://www.facebook.com/kaprukafans
        - img "Facebook" [ref=f2e527]
      - link [ref=f2e528] [cursor=pointer]:
        - /url: https://twitter.com/kapruka
        - img "Twitter" [ref=f2e529]
      - link [ref=f2e530] [cursor=pointer]:
        - /url: https://www.instagram.com/kapruka
        - img "Instagram" [ref=f2e531]
      - link [ref=f2e532] [cursor=pointer]:
        - /url: https://www.linkedin.com/company/kapruka-com
        - img "LinkedIn" [ref=f2e533]
      - link [ref=f2e534] [cursor=pointer]:
        - /url: https://www.youtube.com/@kaprukatube
        - img "YouTube" [ref=f2e535]
```

# Test source

```ts
  1  | import {Page, Locator, expect} from '@playwright/test';
  2  | import {BasePage} from './BasePage';
  3  | 
  4  | export class SearchPage extends BasePage
  5  | {
  6  |     readonly searchBox: Locator;
  7  |     readonly searchButton: Locator;
  8  |     readonly firstCake: Locator;
  9  |     readonly addToCartButton: Locator;
  10 |     readonly viewCartButton: Locator;
  11 |     readonly continuetoDeliveryButton: Locator;
  12 | 
  13 |     constructor (page: Page)
  14 |     {
  15 |         super(page);
  16 |        // this.searchBox = page.locator('input[name="SEARCH PRODUCTS.."]');
  17 |        // this.searchButton = page.locator('input[name="Search"]');   
  18 | 
  19 |         this.searchBox = page.getByPlaceholder('SEARCH PRODUCTS..');
  20 |         this.searchButton = page.getByRole('button', { name: 'Search' });
  21 |         this.firstCake = page.getByText('Strawberry Green Gateaux Vanilla Delight Cake');
  22 |         this.addToCartButton = page.getByRole('button', { name: ' Add to Cart' });   
  23 |         this.viewCartButton = page.getByRole('link', { name: 'View Cart' });
  24 |         this.continuetoDeliveryButton = page.getByRole('button', { name: '  Continue to Delivery' });
  25 |      }
  26 | 
  27 | async goto(): Promise<void>
  28 | {
  29 |     await this.navigate('https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp');
  30 | }
  31 | 
  32 | async isLoaded(): Promise<void> 
  33 |     {
  34 |         await this.searchBox.first().waitFor({state: 'visible', timeout: 500000});
  35 |     }
  36 | 
  37 | async addFirstCake(searchText: string): Promise<void>
  38 | {
  39 |     await this.fill(this.searchBox, searchText);
  40 |     await this.click(this.searchButton);
> 41 |     await this.firstCake.waitFor({ state: 'visible', timeout: 300000 });
     |                          ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  42 |     await this.click(this.firstCake);
  43 |     await this.addToCartButton.waitFor({ state: 'visible', timeout: 400000 });
  44 |     await this.click(this.addToCartButton);
  45 |     await this.viewCartButton.waitFor({ state: 'visible', timeout: 300000 });
  46 |     await this.click(this.viewCartButton);
  47 |     await this.continuetoDeliveryButton.waitFor({ state: 'visible', timeout: 300000 });
  48 |     await this.click(this.continuetoDeliveryButton);
  49 | 
  50 | 
  51 | 
  52 | }
  53 | 
  54 | }
```