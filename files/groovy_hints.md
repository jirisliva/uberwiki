## [Style guide](http://www.groovy-lang.org/style-guide.html)

### 10. Equals and ==

Java’s `==` is actually Groovy’s `is()` method, and Groovy’s `==` is a clever `equals()`!

To compare the references of objects, instead of `==`, you should use `a.is(b)`.

But to do the usual `equals()` comparison, you should prefer Groovy’s `==`, as it also takes care of avoiding `NullPointerException`, independently of whether the left or right is null or not.

Instead of:

    status != null && status.equals(ControlConstants.STATUS_COMPLETED)

Do:

    status == ControlConstants.STATUS_COMPLETED


## final properties
### Class property can be defined as *final* and it works! (SUPRISE, SUPRISE!)
    class DeepThought {
    	final int finalAnswer = 42
    
    	void sayAnswer() {
    		println finalAnswer
    	}
    }
    
    def deepThought = new DeepThought()
    deepThought.finalAnswer = 100

> `Caught: groovy.lang.ReadOnlyPropertyException: Cannot set readonly property: finalAnswer for class: DeepThought`

### Local variable _can_ be defined as *final* but without effect.

    final x = 1
    x = 100

> [Finished in 1.6s] :-)