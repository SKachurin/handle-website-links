/*
This simple script handles all links in your app:
Internal links will be opened in the same window.
External links - in a new window.

You can put it in your footer file or your layout file
*/

//you don`t need the line below if you already loading jquery somewhere in you app
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>

<script>
    $(document).ready(function() {
        
        $('a').click(function(f){
            f.preventDefault();
            var x = $(location).attr('host');

            if ($(this).attr('href')){
                var hr = $(this).attr('href');
                var loc = hr.split('//');
                if (loc.length > 1) {
                
                /*
                replace YourDomainName with your domain name (ex: example.com)
                replace NumberOfSymbols with actual number of symbols in your domain name (ex: for example.com it would be 11) 
                */
                    if (loc[1].slice(0,NumberOfSymbols) == "YourDomainName"){
                        window.location.assign(hr);
                    }else{
                        window.open(hr);
                    }
                } else {
                    window.location.assign(hr);
                }
            }
        })
    });
</script>
