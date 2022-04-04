
    function EnableDisableTB() {
        var others = document.getElementById("others");
        var otherlan = document.getElementById("otherlan");
        otherlan.disabled = others.checked ? false : true;
		otherlan.value="";
        if (!otherlan.disabled) {
            otherlan.focus();
        }
    }