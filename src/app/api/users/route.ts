import data from '../../../../public/api/users.json'

export async function GET() {
  return Response.json(data)
}
