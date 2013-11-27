sap.ui.jsview("sap.ui.demo.myFiori.view.Detail", {

    getControllerName: function () {
        return "sap.ui.demo.myFiori.view.Detail";
    },
    
    createContent: function (oController) {
        
        return new sap.m.Page({
            title: "{i18n>DetailTitle}",
            showNavButton: "{device>/isPhone}",
            navButtonPress: [oController.handleNavButtonPress, oController],
            content: [
                new sap.m.ObjectHeader({
                    title: "{SoId}",
                    number: "{GrossAmount}",
                    numberUnit: "{CurrencyCode}",
                    attributes: [
                        new sap.m.ObjectAttribute({
                            text: "{BuyerName}"
                        }),
                        new sap.m.ObjectAttribute({
                            text: "{CreatedByBp}"
                        }),
                        new sap.m.ObjectAttribute({
                            text: {
                                path: "CreatedAt",
                                formatter: sap.ui.demo.myFiori.util.Formatter.date()
                            }
                        }),
                    ],
                }),
                new sap.m.IconTabBar({
                    expanded: "{device>/isNoPhone}",
                    items: [
                        new sap.m.IconTabFilter({
                            text: "Supplier",
                            icon: "sap-icon://supplier",
                            content: [
                                new sap.ui.layout.form.SimpleForm({
                                    minWidth: 1024,
                                    content: [
                                        new sap.ui.core.Title({
                                            text: "Address"
                                        }),
                                        new sap.m.Label({
                                            text: "Name"
                                        }),
                                        new sap.m.Text({
                                            text: "{BusinessPartner/CompanyName}"
                                        }),
                                        new sap.m.Label({
                                            text: "City"
                                        }),
                                        new sap.m.Text({
                                            text: "{BusinessPartner/City}, {BusinessPartner/PostalCode}"
                                        }),
                                        new sap.m.Label({
                                            text: "Street"
                                        }),
                                        new sap.m.Text({
                                            text: "{BusinessPartner/Street}"
                                        })
                                    ]
                                }),
                            ]
                        })
                    ]
                }),
                new sap.m.Table({
                    headerText: "{i18n>LineItemTableHeader}",
                    columns: [
                        new sap.m.Column({
                            header: new sap.m.Label({
                                text: "Product"
                            })
                        }),
                        new sap.m.Column({
                            minScreenWidth: "Tablet",
                            demandPopin: true,
                            hAlign: "Center",
                            header: new sap.m.Label({
                                text: "Delivery Date"
                            })
                        }),
                        new sap.m.Column({
                            minScreenWidth: "Tablet",
                            demandPopin: true,
                            hAlign: "Center",
                            header: new sap.m.Label({
                                text: "Quantity"
                            })
                        }),
                        new sap.m.Column({
                            hAlign: "Right",
                            header: new sap.m.Label({
                                text: "Price"
                            })
                        })
                    ],
                    items: {
                        path: "LineItems",
                        template: new sap.m.ColumnListItem({
                            type: "Navigation",
                            press: [oController.handleLineItemPress, oController],
                            cells: [
                                new sap.m.ObjectIdentifier({
                                    title: "{ProductId}"
                                }),
                                new sap.m.Text({
                                    text: {
                                        path: "DeliveryDate",
                                        formatter: sap.ui.demo.myFiori.util.Formatter.date
                                    }
                                }),
                                new sap.m.Text({
                                    text: {
                                        path: "Quantity",
                                        formatter: sap.ui.demo.myFiori.util.Formatter.quantity
                                    }
                                }),
                                new sap.m.ObjectNumber({
                                    number: "{GrossAmount}",
                                    numberUnit: "{CurrencyCode}"
                                })
                            ]
                        })
                    }
                })
            ],
            footer: new sap.m.Bar({
                contentRight: [
                    new sap.m.Button({
                        text: "{i18n>ApproveButtonText}",
                        icon: "sap-icon://accept",
                        press: [oController.handleApprove, oController]
                    })
                ]
            })
        });
    }

});
