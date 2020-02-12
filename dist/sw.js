var cacheStorageKey = 'cachesName'
var cacheList = [
  // 注册成功后要立即缓存的资源列表
]

// 当浏览器解析完sw文件时触发install事件
self.addEventListener('install', function (e) {
  // install事件中一般会将cacheList中要换存的内容通过addAll方法，拉一遍放入caches中
  e.waitUntil(
    caches.open(cacheStorageKey).then(function (cache) {
      return cache.addAll(cacheList)
    })
  )
})

// 激活时触发activate事件
self.addEventListener('activate', function (e) {
  // active事件中通常做一些过期资源释放的工作，匹配到就从caches中删除
  var cacheDeletePromises = caches.keys().then(cacheNames => {
    return Promise.all(cacheNames.map(name => {
      //   if (name !== cacheStorageKey) {
      if (name) {
        return caches.delete(name);
      } else {
        return Promise.resolve();
      }
    }));
  });

  e.waitUntil(
    Promise.all([cacheDeletePromises])
  )
})

self.addEventListener('fetch', function (e) {
  // 在此编写缓存策略

  // e.respondWith(
  //   // 可以通过匹配缓存中的资源返回
  //   // caches.match(e.request)
  //   // 也可以从远端拉取
  //   fetch(e.request.url)
  //   // 也可以自己造
  //   // new Response('自己造')
  //   // 也可以通过吧fetch拿到的响应通过caches.put方法放进chches
  // )
})
