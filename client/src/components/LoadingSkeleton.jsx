import { Card, Skeleton } from "@nextui-org/react";

export default function LoadingSkeleton() {
    return (
        <Card className='w-full space-y-5 p-4 bg-background shadow-none'>
            <Skeleton className='rounded-lg bg-secondary'>
                <div className='h-60 rounded-lg bg-default-300'></div>
            </Skeleton>
            <div className='space-y-3'>
                <Skeleton className='w-3/5 rounded-lg'>
                    <div className='h-4 w-3/5 rounded-lg bg-default-200'></div>
                </Skeleton>
                <Skeleton className='w-4/5 rounded-lg'>
                    <div className='h-4 w-4/5 rounded-lg bg-default-200'></div>
                </Skeleton>
                <Skeleton className='w-2/5 rounded-lg'>
                    <div className='h-4 w-2/5 rounded-lg bg-default-300'></div>
                </Skeleton>
            </div>
        </Card>
    );
}
