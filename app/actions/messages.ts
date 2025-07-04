'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createMessage(formData: FormData) {
  const content = formData.get('messageContent') as string;

  if (!content || content.trim() === '') {
    return { success: false, message: 'Message content cannot be empty.' };
  }

  try {
    await prisma.message.create({
      data: {
        content,
      },
    });
    revalidatePath('/'); // Revalidate the home path or wherever your messages are displayed
    return { success: true, message: 'Message saved successfully!' };
  } catch (error) {
    console.error('Error saving message:', error);
    return { success: false, message: 'Failed to save message.' };
  }
}

