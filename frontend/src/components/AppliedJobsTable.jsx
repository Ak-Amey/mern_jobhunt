import React from 'react'
import {Table, TableBody, TableCaption, TableHead, TableHeader, TableRow, TableCell} from "./ui/table"
import { Badge } from './ui/badge'

export const AppliedJobsTable = () => {
  return (
    <div>
      <Table>
      <TableCaption>A list of your Applied jobs</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Job Role</TableHead>
          <TableHead>Company</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          [1,2].map((item,index)=>(
            <TableRow key={index}>
            <TableCell>17-05-2025</TableCell>
            <TableCell>Frontend Developer</TableCell>
            <TableCell>Google</TableCell>
            <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
            </TableRow>
          ))
        }
      </TableBody>
      </Table>
    </div>
  )
}
