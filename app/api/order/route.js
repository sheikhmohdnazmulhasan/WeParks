import connectMongoDB from "@/libs/mongodb"
import Orders from "@/models/order";
import { NextResponse } from "next/server";




export async function GET(request) {
    await connectMongoDB();

    const { searchParams } = new URL(request.url);
    const bookingId = parseFloat(searchParams.get('bookingId'));

    if (bookingId) {
        const result = await Orders.findOne({ orderNumber: bookingId });
        return NextResponse.json(result);

    } else {
        const result = await Orders.find();
        return NextResponse.json(result);
    }
}

export async function POST(request) {
    await connectMongoDB();

    const data = await request.json();
    const result = Orders.create(data);

    if (result) {

        return NextResponse.json({ message: 'Order successfully saved in database', success: true }, { status: 200 });

    } else {
        return NextResponse.json({ message: 'Something Wrong', success: false }, { status: 500 });

    };

};

export async function PUT(request) {
    await connectMongoDB();
    const data = await request.json();
    console.log(data);
    const filter = { _id: data._id };
    const result = await Orders.findByIdAndUpdate(filter, data);
    console.log(result);

    if (result) {
        return NextResponse.json({ message: 'Order successfully Updated in database', success: true }, { status: 200 });

    } else {
        return NextResponse.json({ message: 'Something Wrong', success: false }, { status: 500 });

    }
};


export async function DELETE(request) {
    await connectMongoDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    const result = await Orders.findByIdAndDelete(id);

    if (result) {
        return NextResponse.json({ message: 'Order successfully deleted' }, { status: 200 });

    } else
        return NextResponse.json({ message: 'Something Wrong' }, { status: 500 })
}


