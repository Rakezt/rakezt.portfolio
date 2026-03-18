'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    alert('Message submitted!');

    setForm({
      name: '',
      email: '',
      message: '',
    });
  }

  function handleReset() {
    setForm({
      name: '',
      email: '',
      message: '',
    });
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-6 mt-10'>
      <div>
        <label className='font-medium'>
          Name<span className='text-red-500'>*</span>
        </label>

        <Input
          name='name'
          value={form.name}
          onChange={handleChange}
          required
          placeholder='Your name, your fame'
          className='mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-primary'
        />
      </div>

      <div>
        <label className='font-medium'>
          Email<span className='text-red-500'>*</span>
        </label>

        <Input
          name='email'
          type='email'
          value={form.email}
          onChange={handleChange}
          required
          placeholder='Where can I reach you back?'
          className='mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-primary'
        />

        <p className='text-sm text-muted-foreground mt-2'>
          Temporary emails are also accepted, unless you wish to hear back
        </p>
      </div>

      <div>
        <label className='font-medium'>
          Message<span className='text-red-500'>*</span>
        </label>

        <textarea
          name='message'
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          placeholder='Your words, my inbox.'
          className='mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-primary'
        />
      </div>

      <div className='space-y-4'>
        <Button
          type='submit'
          className='
          w-full
          rounded-lg
          py-3
          text-white
          font-medium
          bg-[hsl(var(--accent))]
          from-purple-500
          to-purple-600
          hover:opacity-90
          transition cursor-pointer
          '
        >
          Submit
        </Button>

        <Button
          type='button'
          onClick={handleReset}
          className='
          w-full cursor-pointer
          rounded-lg
          py-3
          border
          border-border
          hover:bg-muted
          transition
          '
        >
          Reset
        </Button>
      </div>
    </form>
  );
}
