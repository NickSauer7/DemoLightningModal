import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class TestModal extends LightningModal {

    /* FLOW PROPERTIES */
    @api header;
    @api flowName;
    @api inputVariables;
    @api flowModal = false;
    @api showFooter = false;
    @api showHeader = false;
    @api flowFinish = 'NONE';

    handleStatusChange(event) {
        if(event.detail.status === 'FINISHED'){
            this.close('flow finished: '+this.flowName);
        }
    }

    handleClose(){
        this.close('modal is closed');
    }

}