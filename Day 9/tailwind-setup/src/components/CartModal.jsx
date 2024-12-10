

export default function CartModal({cart}) {

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
          
            <dialog id="cart-modal" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    {
                        cart.map(item=><div key={item.id}>
                            <span>{item.name}</span>
                            <span className="ml-4">{item.price}</span>
                        </div>)
                    }
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
