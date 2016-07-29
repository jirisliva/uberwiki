# Java Thread Pools by java.util.concurrent.Executors

Example:

* Thread pool size: 10 (except newCachedThreadPool which is unlimited)
* Time spend in each task: 3 seconds
* New task started each: 1 second
* Total count of started tasks: 20

## Executors.newFixedThreadPool
* Pros
	* Fixed size of pool
* Cons
	* Created thread is never destroyed.
	* Doesn't start reusing threads before thread count reach pool size.

![Executors.newFixedThreadPool](threads/1_Executors.newFixedThreadPool.png "Executors.newFixedThreadPool")

## Executors.newScheduledThreadPool
* Pros
	* Fixed size of pool.
	* Start reusing threads before reach pool size.
* Cons
	* Created thread is never destroyed.

![Executors.newScheduledThreadPool](threads/2_Executors.newScheduledThreadPool.png "Executors.newScheduledThreadPool")

## Executors.newCachedThreadPool
* Pros
	* Small count of threads created.
	* 30 sec. not used thread are destroyed.
* Cons
	* Unlimited size of pool

![Executors.newCachedThreadPool](threads/3_Executors.newCachedThreadPool.png "Executors.newCachedThreadPool")