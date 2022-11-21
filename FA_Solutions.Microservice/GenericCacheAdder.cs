using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FA_Solutions.Microservice
{
    public class GenericCacheAdder
    {
        private readonly IMemoryCache _cache;

        public void Add<T>(T o, string key)
        {
            //if (IsEnableCache)
            //if (IsEnableCache)
            {
                T cacheEntry;

                // Look for cache key.
                if (!_cache.TryGetValue(key, out cacheEntry))
                {
                    // Key not in cache, so get data.
                    cacheEntry = o;

                    // Set cache options.
                    var cacheEntryOptions = new MemoryCacheEntryOptions()
                        // Keep in cache for this time, reset time if accessed.
                        .SetSlidingExpiration(TimeSpan.FromSeconds(7200));

                    // Save data in cache.
                    _cache.Set(key, cacheEntry, cacheEntryOptions);
                }
            }
        }


        //Code Implementation
        //private IList<Employee> GetListFromCache()
        private void GetListFromCache()
        {
            //const string Key = "employee";
            //IList<Employee> cacheValue = null;
            //if (!this._cache.TryGetValue(Key, out cacheValue))
            //{
            //    //// Key not in cache, so get data.
            //    cacheValue = this.context.Employee.AsNoTracking().Include(x =>
            //    x.Id).ToList();

            //// Set cache options.
            //var cacheEntryOptions = new MemoryCacheEntryOptions()
            //    //// Keep in cache for this time, reset time if accessed.
            //    .SetSlidingExpiration(TimeSpan.FromDays(1));

            ////// Save data in cache.
            //this._cache.Set(Key, cacheValue, cacheEntryOptions);
            //}

            //return cacheValue;
             
        }
    }
}
