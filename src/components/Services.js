import React, { useState } from 'react';
import { filterService } from '../actions';
import { useDispatch } from "react-redux";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Services = (props) => {
    const [selectedService, setSelectedService] = useState(null);
    const dispatch = useDispatch();

    const header = (
        <div className='grid'>
            <div className='col-12 bold text-xl'>Control Section</div>
            <div className='col-12'>
                <div className='surface-700 mb-0 py-2 border-round-sm px-0 mx-0 text-white'>
                    <div className="flex">
                        <div className="col-3">
                            <h5 className="bold mb-0">Service Name</h5>
                        </div>
                        <div className="col-9">
                            <h5 className="bold text-md mb-0">Service Link</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const onSelectService = (item) => {
        setSelectedService(item.attributes.name);
        dispatch(filterService(item.attributes.name));
    }

    const nameBodyTemplate = (rowData) => {
        return <span>{rowData.id}</span>;
    }

    const linkBodyTemplate = (rowData) => {
        return <span>{rowData.links.self}</span>;
    }

    return (
        <div className='container'>
            <DataTable className="p-3" paginator rows={5} showGridlines header={header} value={props?.data} selectionMode="single" selection={selectedService} onSelectionChange={e => onSelectService(e.value)}  responsiveLayout="scroll">
                <Column header="Service Name" body={nameBodyTemplate}  ></Column>
                <Column header="Service Link" body={linkBodyTemplate}  ></Column>
            </DataTable>
        </div>
    );
}

export default Services;