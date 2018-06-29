import React from 'react';
import Modal from 'react-responsive-modal';

class SalesButton extends React.Component{
    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    render(){
        const { open } = this.state;

        return (
            <div className="example">
                <h4>Centered modal</h4>
                <button className="btn-sales btn-sales-action" onClick={this.onOpenModal}>
                    Sales Questions?
                </button>{' '}

                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2>Simple centered modal</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                        hendrerit risus, sed porttitor quam.
                    </p>
                </Modal>
            </div>

        )
    }






}

export default SalesButton;