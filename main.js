    function getDiscount() {
    let budgetInput = Number(document.getElementById("budgetInput").value);
    let discount = (budgetInput * 0.2).toFixed(2);


    document.getElementById("").innerHTML =
    //display output using JS Method
    document.getElementById().innerHTML = '
    <div class="container text-center bg-light">
                 <h2>Recommended Brands</h2>
                        <button type="button" class="btn btn-outline-dark">Acer</button>
                        <button type="button" class="btn btn-outline-dark">Asus</button>
                        <button type="button" class="btn btn-outline-dark">HP</button>
                            <p>Eligible Discount: <span class="badge bg-danger">$discountedPrice</span></p>
                </div>
            document.getElementById("discOUNT").innerHTML =
            "Eligible Discount: " + discount;
}