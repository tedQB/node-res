# node-res 接口文档



## 接口列表

### 1.获取城市列表

```
http://127.0.0.1:3000/v1/cities
```

#### 例:

[http://127.0.0.1:3000/v1/cities?type=guess]

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|type      |Y       |string  |guess：定位城市，  hot：热门城市， group：所有城市 |

#### 返回实例:
```javascript
    {
      id: 1,
      name: "上海",
      abbr: "SH",
      area_code: "021",
      sort: 1,
      latitude: 31.23037,
      longitude: 121.473701,
      is_map: true,
      pinyin: "shanghai"
    }

```

### 2、获取所选城市信息

[http://127.0.0.1:8001/v1/cities/2](http://127.0.0.1:8001/v1/cities/2)

#### 参数类型:param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|id      |Y       |int   |城市id |

#### 返回示例：

```javascript
{
    "pinyin": "hangzhou",
    "is_map": true,
    "longitude": 120.155151,
    "latitude": 30.274151,
    "sort": 8,
    "area_code": "0571",
    "abbr": "HZ",
    "name": "杭州",
    "id": 2
}

```


### 3.搜索地址

#### 例:
[http://localhost:3000/v1/pois?city_id=2&keyword=%E8%A5%BF%E6%B9%96]

#### 参数类型：query

|参数|是否必选|类型|说明|get
|:-----|:-------:|:-----|:-----|
|city_id      |Y       |int   |城市id |
|keyword      |Y       |string   |搜索关键词 |
|type      |N       |string   |搜索类型，默认为search |

#### 返回实例:
```javascript
    [{
        "name": "西湖风景名胜区",
        "address": "浙江省杭州市西湖区龙井路1号",
        "latitude": 30.225363,
        "longitude": 120.125068,
        "geohash": "30.225363,120.125068"
    },
    {
        "name": "西湖公园",
        "address": "浙江省杭州市建德市西门街119号西南方向199米",
        "latitude": 29.53935,
        "longitude": 119.49837,
        "geohash": "29.53935,119.49837"
    }]

```

### 4.上传图片

#### 例:
http://localhost:3000/v1/addimg/:type

#### 参数类型：param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|type      |Y       |string  |shop：商铺图片，food：食品图片，avatar：头像 |

#### 返回实例:
```javascript
{
  status: 1,
  image_path: '15bfafa418322.jpeg'  
}

```


### 5.获取食品列表

#### 例:
[http://localhost:3000/shopping/v2/foods?offset=0&limit=20&restaurant_id=2](http://localhost:3000/shopping/v2/foods?offset=0&limit=20&restaurant_id=2)

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|limit      |Y       |int | 获取数据数量，默认 20 |
|offset      |Y       |int | 跳过数据条数 默认 0 |
|restaurant_id      |Y       |int | 餐馆id |

#### 返回实例:
```javascript
[{
     "name": "111",
     "image_path": "16ae8a8bc7b40873.jpg",
     "activity": {
         "image_text_color": "f1884f",
         "icon_color": "f07373",
         "image_text": "111"
     },
     "restaurant_id": 2,
     "category_id": 2342,
     "item_id": 2977,
     "tips": "460评价 月售656份",
     "specfoods": [{
         "specs_name": "默认",
         "name": "111",
         "item_id": 2977,
         "sku_id": 13468,
         "food_id": 13466,
         "restaurant_id": 2,
         "_id": "5ce797bfbede5d271928d8c4",
         "specs": [],
         "stock": 1000,
         "checkout_mode": 1,
         "is_essential": false,
         "recent_popularity": 462,
         "sold_out": false,
         "price": 20,
         "promotion_stock": -1,
         "recent_rating": 2.7,
         "packing_fee": 1,
         "pinyin_name": "",
         "original_price": 0
     }],
     "satisfy_rate": 88,
     "satisfy_count": 443,
     "attributes": [{
         "icon_color": "5ec452",
         "icon_name": "新"
     }, {
         "icon_color": "f07373",
         "icon_name": "招牌"
     }],
     "is_essential": false,
     "server_utc": "2019-05-21T13:47:21.363Z",
     "specifications": [],
     "rating_count": 460,
     "month_sales": 656,
     "description": "11",
     "attrs": [],
     "display_times": [],
     "pinyin_name": "",
     "is_featured": 0,
     "rating": 4.3,
     "__v": 0
 }]

```
