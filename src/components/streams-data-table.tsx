'use client'

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table"
import { Input } from "@/components/ui/input"

const data = [
  { id: 1, songName: "Shape of You", artist: "Ed Sheeran", dateStreamed: "2023-05-01", streamCount: 1500, userId: "user123" },
  { id: 2, songName: "Blinding Lights", artist: "The Weeknd", dateStreamed: "2023-05-02", streamCount: 1200, userId: "user456" },
  { id: 3, songName: "Dance Monkey", artist: "Tones and I", dateStreamed: "2023-05-03", streamCount: 1000, userId: "user789" },
  { id: 4, songName: "Rockstar", artist: "Post Malone", dateStreamed: "2023-05-04", streamCount: 900, userId: "user101" },
  { id: 5, songName: "Someone You Loved", artist: "Lewis Capaldi", dateStreamed: "2023-05-05", streamCount: 800, userId: "user202" },
]

const columns: ColumnDef<typeof data[0]>[] = [
  {
    accessorKey: "songName",
    header: "Song Name",
  },
  {
    accessorKey: "artist",
    header: "Artist",
  },
  {
    accessorKey: "dateStreamed",
    header: "Date Streamed",
  },
  {
    accessorKey: "streamCount",
    header: "Stream Count",
  },
  {
    accessorKey: "userId",
    header: "User ID",
  },
]

export function StreamsDataTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter songs..."
          value={(table.getColumn("songName")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("songName")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}