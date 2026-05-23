import React,{useState} from "react";

function Handle() {
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("False")


    function handleNameChange(event){
        setName(event.target.value)
        


    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }

    function handleCommentChange(event){
        setComment(event.target.value)
    }

    function handlePaymentChange(event){
        setPayment(event.target.value)
    }

    function handleShippingChange(event){
        setShipping(event.target.value)
    }

    return ( <div>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange}  type="number"/>
        <p>Quantity: {quantity}</p>


        <textarea value={comment} onChange={handleCommentChange} placeholder="Enter your comment here..." />
        <p>Comment: {comment}</p>



        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select Payment Method</option>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="cash">Cash</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
            <input type="radio" value="pickup" checked={shipping === "pickup"} onChange={handleShippingChange} />
            Pickup
        </label>
        <label>
            <input type="radio" value="delivery" checked={shipping === "delivery"} onChange={handleShippingChange} />
            Delivery 
        </label>

        <p>Shipping: {shipping}</p>

    </div>)

}


export default Handle;