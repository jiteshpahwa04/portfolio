// app/api/download/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { createReadStream, existsSync } from 'fs';
import { join } from 'path';

export async function GET(req: NextRequest) {
  const filePath = join(process.cwd(), 'public', 'Resume.pdf');

  if (!existsSync(filePath)) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }

  const fileName = 'Jitesh_Pahwa_Resume.pdf';
  const contentType = 'application/pdf';

  const headers = new Headers();
  headers.set('Content-Disposition', `attachment; filename="${fileName}"`);
  headers.set('Content-Type', contentType);

  const fileStream = createReadStream(filePath);

  console.log(fileStream);

  return new NextResponse(fileStream as any, { headers });
}
