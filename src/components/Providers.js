import React from 'react';
import { OrderList } from 'primereact/orderlist';

const Providers = (props) => {

    const header = (
        <div className='grid'>
            <div className='col-12 bold text-xl'>Result Section</div>
            <div className='col-12'>
                <div className='surface-700 mb-0 py-2 border-round-sm px-0 mx-0 text-white'>
                    <div className="flex">
                        <div className="col-3">
                            <h5 className="bold mb-0">Provider Image</h5>
                        </div>
                        <div className="col-9">
                            <h5 className="bold text-md mb-0">Provider Details</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const providerTemplate = (item) => {
        const { attributes } = item;
        const img = attributes['profile-image'] ? attributes['profile-image'] : 'https://picsum.photos/id/12/200/200';
        const sub = attributes.subspecialties.join(" , ");
        return (
            <div className="flex p-3">
                <div className="col-3 ">
                    <img src={img} alt="provider_image" style={{ maxWidth: 140, maxHeight: 120 }} className='w-full h-full m-auto border-circle surface-500' />
                </div>
                <div className="col-9 product-list-detail flex">
                    <div className='m-auto justify-content-center inline-flex flex-column'>
                        <div className='inline-block'><h5 className='bold text-md inline-block'>Name : </h5>
                            <span className="text-md">{' '}{attributes?.name}</span>
                        </div>
                        <h5 className='bold text-md'>Sub-specialties : </h5>
                        <span className="text-md"> {sub}</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <OrderList className='p-3' value={props?.data} header={header} dataKey="id" itemTemplate={providerTemplate} />
        </div>
    );
}

export default Providers;