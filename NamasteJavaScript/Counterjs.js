function Counter()
{
    var count = 0;
    this.incrementCount = function ()
    {
        count++;
        console.log(count);
    }
    this.decrementCount = function ()
    {
        count--;
        console.log(count);
    }
}

var counter1 = new Counter();
counter1.incrementCount();
counter1.incrementCount();
counter1.decrementCount();