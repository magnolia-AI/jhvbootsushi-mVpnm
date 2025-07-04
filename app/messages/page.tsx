import prisma from '@/lib/prisma';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const revalidate = 0;

export default async function MessagesPage() {
  const messages = await prisma.message.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Contact Messages</h1>
      <div className="grid gap-6">
        {messages.map((message) => (
          <Card key={message.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{message.subject}</CardTitle>
                  <CardDescription className="pt-2">
                    From: {message.name} ({message.email})
                  </CardDescription>
                </div>
                <span className="text-xs text-gray-500">
                  {new Date(message.createdAt).toLocaleString()}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p>{message.content}</p>
            </CardContent>
          </Card>
        ))}
        {messages.length === 0 && (
          <p className="text-center text-gray-500">No messages yet.</p>
        )}
      </div>
    </div>
  );
}

