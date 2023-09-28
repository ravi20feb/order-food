



// -------------------------------------------------------------------------------------------------------------------------------------------------------//
export const path = "M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z" 
export function successLocation(position){


    const {GeolocationPosition} = position
    localStorage.setItem('lat',JSON.stringify(position?.coords?.latitude))
    localStorage.setItem('lng',JSON.stringify(position?.coords?.longitude))
            dispatch(addLat({lat:json.data[0].geometry.location.lat})) 
            dispatch(addLat({lng:json.data[0].geometry.location.lng})) 

    console.log(position)
}
  function errorLocation(error1){
    console.log(error1)
}


export function accessLocation(){
    navigator.geolocation.getCurrentPosition(successLocation,errorLocation)
}

// ----------------------------------------------------------------------


export const  starPath = "M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
export const path2 =d="M14.2 2.864l-1.899 1.38c-0.612 0.447-1.35 0.687-2.11 0.687h-2.352c-0.386 0-0.727 0.248-0.845 0.613l-0.728 2.238c-0.235 0.721-0.691 1.348-1.302 1.79l-1.905 1.385c-0.311 0.226-0.442 0.626-0.323 0.991l0.728 2.241c0.232 0.719 0.232 1.492-0.001 2.211l-0.727 2.237c-0.119 0.366 0.011 0.767 0.323 0.994l1.906 1.384c0.61 0.445 1.064 1.070 1.3 1.79l0.728 2.24c0.118 0.365 0.459 0.613 0.844 0.613h2.352c0.759 0 1.497 0.24 2.107 0.685l1.9 1.381c0.313 0.227 0.736 0.227 1.048 0.001l1.9-1.38c0.613-0.447 1.349-0.687 2.11-0.687h2.352c0.384 0 0.726-0.248 0.845-0.615l0.727-2.235c0.233-0.719 0.688-1.346 1.302-1.794l1.904-1.383c0.311-0.226 0.442-0.627 0.323-0.993l-0.728-2.239c-0.232-0.718-0.232-1.49 0.001-2.213l0.727-2.238c0.119-0.364-0.012-0.765-0.324-0.992l-1.901-1.383c-0.614-0.445-1.070-1.074-1.302-1.793l-0.727-2.236c-0.119-0.366-0.461-0.614-0.845-0.614h-2.352c-0.76 0-1.497-0.239-2.107-0.685l-1.903-1.382c-0.313-0.227-0.736-0.226-1.047-0.001zM16.829 0.683l1.907 1.385c0.151 0.11 0.331 0.168 0.521 0.168h2.352c1.551 0 2.927 1 3.408 2.475l0.728 2.241c0.057 0.177 0.169 0.332 0.321 0.442l1.902 1.383c1.258 0.912 1.784 2.531 1.304 4.006l-0.726 2.234c-0.058 0.182-0.058 0.375-0.001 0.552l0.727 2.237c0.48 1.477-0.046 3.096-1.303 4.007l-1.9 1.38c-0.153 0.112-0.266 0.268-0.324 0.447l-0.727 2.237c-0.48 1.477-1.856 2.477-3.408 2.477h-2.352c-0.19 0-0.37 0.058-0.523 0.17l-1.904 1.383c-1.256 0.911-2.956 0.911-4.213-0.001l-1.903-1.384c-0.15-0.11-0.332-0.168-0.521-0.168h-2.352c-1.554 0-2.931-1.001-3.408-2.477l-0.726-2.234c-0.059-0.18-0.173-0.338-0.324-0.448l-1.902-1.381c-1.258-0.912-1.784-2.53-1.304-4.008l0.727-2.235c0.058-0.179 0.058-0.373 0.001-0.551l-0.727-2.236c-0.481-1.476 0.046-3.095 1.302-4.006l1.905-1.385c0.151-0.11 0.264-0.265 0.323-0.444l0.727-2.235c0.478-1.476 1.855-2.477 3.408-2.477h2.352c0.189 0 0.371-0.059 0.523-0.17l1.902-1.383c1.256-0.911 2.956-0.911 4.212 0zM18.967 23.002c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM18.967 20.307c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM10.545 14.549c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM10.545 11.855c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM17.78 7.882l2.331 1.352-7.591 13.090-2.331-1.352 7.591-13.090z"


// custom radio svg
export const nonSelectedPath = "M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" 
export const selectedPath1 = "M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0zM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 4.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"
export const selectedPath2 = "M8 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"

{/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)">
<path fill="rgba(2, 6, 12, 0.92)" fill-rule="evenodd" clip-rule="evenodd" d={nonSelectedPath} fill-opacity="0.6"></path></svg> */}

{/* <svg width="16" height="16" fill="none" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="#F15700">
<path fill="#F15700" fill-rule="evenodd" clip-rule="evenodd" d={selectedPath1}></path>
<path fill-rule="evenodd" clip-rule="evenodd" d=selectedPath2></path>
</svg> */}



export const selectedCheckPath = "M1.172 1.172C0 2.343 0 4.229 0 8c0 3.771 0 5.657 1.172 6.828C2.343 16 4.229 16 8 16c3.771 0 5.657 0 6.828-1.172C16 13.657 16 11.771 16 8c0-3.771 0-5.657-1.172-6.828C13.657 0 11.771 0 8 0 4.229 0 2.343 0 1.172 1.172zm11.622 4.22a.843.843 0 0 0-.079-1.184.83.83 0 0 0-1.175.078l-5.247 6.036-1.87-1.882a.83.83 0 0 0-1.179 0 .843.843 0 0 0 0 1.186l1.87 1.883a1.66 1.66 0 0 0 2.433-.082l5.247-6.036z"

export const nonSelectedCheck = "M3.81078 14.3669C4.77686 14.4968 6.07198 14.5 8 14.5C9.92802 14.5 11.2231 14.4968 12.1892 14.3669C13.1121 14.2428 13.5071 14.0284 13.7678 13.7678C14.0284 13.5071 14.2428 13.1121 14.3669 12.1892C14.4968 11.2231 14.5 9.92802 14.5 8C14.5 6.07198 14.4968 4.77686 14.3669 3.81078C14.2428 2.88786 14.0284 2.49287 13.7678 2.23223C13.5071 1.9716 13.1121 1.75715 12.1892 1.63307C11.2231 1.50319 9.92802 1.5 8 1.5C6.07198 1.5 4.77686 1.50319 3.81078 1.63307C2.88786 1.75715 2.49287 1.9716 2.23223 2.23223C1.9716 2.49287 1.75715 2.88786 1.63307 3.81078C1.50319 4.77686 1.5 6.07198 1.5 8C1.5 9.92802 1.50319 11.2231 1.63307 12.1892C1.75715 13.1121 1.9716 13.5071 2.23223 13.7678C2.49287 14.0284 2.88786 14.2428 3.81078 14.3669ZM1.17157 1.17157C0 2.34315 0 4.22876 0 8C0 11.7712 0 13.6569 1.17157 14.8284C2.34315 16 4.22876 16 8 16C11.7712 16 13.6569 16 14.8284 14.8284C16 13.6569 16 11.7712 16 8C16 4.22876 16 2.34315 14.8284 1.17157C13.6569 0 11.7712 0 8 0C4.22876 0 2.34315 0 1.17157 1.17157Z"


const seoParams = {
    apiName:"FoodHomePage",
pageType:"FOOD_HOMEPAGE",
seoUrl:"https://www.swiggy.com/",
}


// filter post fetch start here

export  async function fetchData(csrf1,facet1,lat,lng) {
        const url = 'https://www.swiggy.com/dapi/restaurants/list/update';
        const csrf = csrf1; // Replace with your CSRF token
        const facet = facet1; // Replace with your facet value
        console.log(csrf)

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
        headers.append('Origin','http://localhost:3000');

        const body1 = {
            lat: lat,
            lng: lng,
            page_type: 'DESKTOP_WEB LISTING',
            seo_Params: {
            apiName: "FoodHomePage",
            pageType: "FOOD_HOMEPAGE",
            seoUrl: "https://www.swiggy.com/"
            },
            _csrf: csrf,
            filters: {
            isFiltered: true,
            facets: facet
            }
           
        };

        
        let requestBody = JSON.stringify(body1);

         
        const options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',

            },
            body: requestBody,
            
        };

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
        
            // Handle the response data here
            console.log(data);
        } 
        catch (error) {
            console.error('Fetch error:', error);
        }
    }
    // filter  post fetch end  here


    // openFilter   give filter label list ,
  export   function openFiter(getFacetList,setOpenFilter){
        console.log('i am nott runing')
        const container =[]
        console.log(getFacetList)
        container.length>1&&console.log(container)
        console.log('i am continer')
        if (getFacetList.length>0) {
            console.log('i am 7')
            for (const filter of getFacetList) {
            
                if(!filter.openFilter){
                    
                    
                    for (const iterator of filter.facetInfo ) {
                        console.log(iterator)
                        
                        if(iterator.openFilter){
                            container.push(iterator)
                            
                       
                        }
                    } 
                   
                   
                }
                
            }
            setOpenFilter(container)
            
           
            
        }
        

    }

   {/** opoen filter end here */}


   