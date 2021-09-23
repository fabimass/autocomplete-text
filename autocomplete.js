
function autocomplete(text, array){
    /** The autocomplete function takes two arguments,
     *  the text field element and an array of possible autocompleted values
     */

    /** Execute a function when someone writes in the text field */
    text.addEventListener("input", function(e) {

        /** Bring the text written in the input */
        let val = this.value;
        //let b, i, val = this.value;

        /** Close any already open lists of autocompleted values */
        closeAllLists();

        if ( !val ){ return false; }

        /** Create a DIV element that will contain the items */
        let list = document.createElement("div");
        list.setAttribute("id", this.id + "autocomplete-list");
        list.setAttribute("class", "autocomplete-items");

        /** Append the DIV element as a child of the autocomplete container */
        this.parentNode.appendChild(a);

        /** For each item in the array... */
        for ( let i=0 ; i<array.lenght ; i++ ){

            /** Check if the text written by the user is contained inside the item */
            if ( array[i].toUpperCase().indexOf(val.toUpperCase()) != -1 ){

                /** Create a DIV element for each matching element */
                let match = document.createElement("div");

                /** Make the matching letters bold */
                let boldBeg = array[i].toUpperCase().indexOf(val.toUpperCase());
                let boldEnd = boldBeg + val.length;
                match.innerHTML = array[i].substr(0, boldBeg);
                match.innerHTML += `<strong style='color:#06c982'>${array[i].substr(boldBeg,val.length)}</strong>`;
                match.innerHTML += array[i].substr(boldEnd);
                
                /** Insert a hidden input field that will hold the current array item's value */
                match.innerHTML += `<input type='hidden' value='${array[i]}'>`;

                /** Execute a function when someone clicks on the desired value */
                match.addEventListener("click", function(e) {

                    /** Insert the selected value in the text input */
                    text.value = this.getElementsByTagName("input")[0].value;

                    /** Close the list of autocompleted values */
                    closeAllLists();
                });

                list.appendChild(match);
            }
        }
        
    });

    function closeAllLists(){
        let x = document.getElementsByClassName("autocomplete-items");
        for (let i=0 ; i<x.length ; i++){
            x[i].parentNode.removeChild(x[i]);
        }
    }

    /** Execute a function when someone clicks in the document */
    document.addEventListener("click", function (e){
        closeAllLists();
    });
}