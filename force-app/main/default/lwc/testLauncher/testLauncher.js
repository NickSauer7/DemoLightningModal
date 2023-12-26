import { LightningElement, api } from 'lwc';
import testModal from 'c/testModal';

export default class TestLauncher extends LightningElement {

    /* STANDARD ATTRIBUTES */
    @api recordId;

    /* FLOW ATTRIBUTES */
    flowName;
    inputVariables;
    flowFinish = 'NONE';
    size = 'large';
    flowLabel = '';
    showFooter = false;
    showHeader = false;
    flowDescription;
    disableClose = false;
    autoRefresh = false;

    /* FLOW TYPES & ATTRIBUTES */

    //Test Flow Launch
    @api testFlow(){
        this.size = 'full';
        this.flowName = 'TestFlow';
        this.flowLabel = 'Test Flow';
        this.showHeader = false;
        this.showFooter = false;
        this.flowDescription = 'Test Flow';
        this.inputVariables = [{
            name: 'recordId',
            type: 'String',
            value: this.recordId
        }];
        this.flowFinish = 'STOP';
        this.handleFlowModal();
    }

    /* FLOW MODAL OPENING */

    async handleFlowModal() {
        this.result = await testModal.open({
            size: this.size,
            flowName: this.flowName,
            header: this.flowLabel,
            flowModal: true,
            showHeader: this.showHeader,
            showFooter: this.showFooter,
            inputVariables: this.inputVariables,
            flowFinish: this.flowFinish,
            desription: this.flowDescription,
            disableClose: this.disableClose
        });
    }

}