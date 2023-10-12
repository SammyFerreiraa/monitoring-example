import data from '../../../../public/api/disciplines.json'

export const GET = async () => {
  return Response.json(data)
}
