import React from 'react';
 
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
 
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
 
class FaqAccordion extends React.Component {
    render() {
        return (
            <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is dropshipping?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Dropshipping is a retail method in which you do not keep products in stock. Dropshippers do not maintain product inventory, but send customer orders and shipping information directly to the supplier, and the supplier ship the goods directly to the customers.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Is Flipcoo Free?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Flipcoo Lite plan is 100% free. You pay and upgrade only when you scale your dropshipping business.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What level of access do I get during my free Lite plan?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            All members with the Lite plan have the access to most of the features in Flipcoo's platform except for some customized functions.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is the fee to connect extra selling channels?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            100% Free. Our mission is to make you efficient at fulfilling your orders - wherever you sell. We are happy to see if you want to use multiple selling channels to grow your sales. The only time you would see an additional fee is if the selling channel you want to connect is a Premium Integration.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Can I change my plan?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Sure! It is easy to change your account's plan to a different one.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What do I need to get started?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            In order to get started with us you will need to create a free account <a href="http://app.flipcoo.com/register">here</a>.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What can I do if I cannot find a product that I want to sell in Flipcoo's platform?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            No worries! We have a list of reliable suppliers, simply contact your dedicated account manager for product sourcing.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Why go Professional or Enterprise?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            With a Professional or Enterprise plan, one of the main benefits is that you will get higher limit on orders per month as well as an increase in the number of SKUs you are able to list on your store.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        );
    }
}
export default FaqAccordion;