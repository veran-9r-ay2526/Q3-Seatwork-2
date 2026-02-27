function giveDiscount(){

    // show the box
    document.getElementById("brandsBox")
        .classList.remove("hidden");

    // calculate discount
    let budgetInput = Number(document.getElementById("budgetInput").value);
    let discount = (budgetInput * 0.2).toFixed(2);

    document.getElementById("discOUNT").innerHTML = `
        <div class="text-center">
            <h5>Recommended Brands</h5>

            <button class="btn btn-outline-dark m-1">Acer</button>
            <button class="btn btn-outline-dark m-1">Asus</button>
            <button class="btn btn-outline-dark m-1">Lenovo</button>

            <p class="mt-3">
                Eligible Discount:
                <span class="badge bg-danger">₱${discount}</span>
            </p>
        </div>
    `;
}