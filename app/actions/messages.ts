'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createMessage(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const content = formData.get('message') as string;

  if (!name || !email || !subject || !content) {
    return { success: false, message: 'All fields are required.' };
  }

  try {
    await prisma.message.create({
      data: {
        name,
        email,
        subject,
        content,
      },
    });
    revalidatePath('/');
    return { success: true, message: 'Message saved successfully!' };
  } catch (error) {
    console.error('Error saving message:', error);
    return { success: false, message: 'Failed to save message.' };
  }
}

