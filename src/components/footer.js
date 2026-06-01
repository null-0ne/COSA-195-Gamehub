//https://getbootstrap.com/docs/5.3/components/navbar/#placement

export default function renderFooter(
    element = document.createElement('div'), /* default new nav element*/
    params = {} /* default empty object*/
) {
    element.setAttribute('class','fixed-bottom bg-primary');
    element.setAttribute('data-bs-theme','dark');
    element.classList.add("p-0");
    //set the content of the nav bar
    element.innerHTML = `   
    <div class="container-fluid p-0">
        <a href="/login" class='link-offset-2 link-underline link-underline-opacity-0 text-white'>Test</a>
    </div>
    `;

    //return the element in case it is need for further logic
    return element;
}