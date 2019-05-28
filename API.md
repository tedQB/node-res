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

