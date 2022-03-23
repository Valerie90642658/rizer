<p><a id="aaa" href="/java/">Ссылка1 для проверки</a></p>
<p><a id="aaa2" href="/php/">Ссылка2 для проверки</a></p>

<script type="text/javascript">
Function.prototype.bind = function(object) {
    var method = this;
    return function() {
        return method.apply(object, arguments)
    }
}
l=document.getElementById("aaa");
l2=document.getElementById("aaa2");
addEvent(l, "click", function() { alert(this.href); return false;}.bind(l2));
addEvent(l2, "click", function() { alert(this.href); return false;}.bind(l2));
</script>
