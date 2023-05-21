<template>
  <q-card class="q-pa-sm q-ma-lg" dark>
    <q-card-actions>
      <q-btn-toggle
        toggle-color="cyan"
        v-model="switchList"
        @input="handleChange"
        :options="[
          { label: 'Pexeso', value: 'pexeso' },
          { label: 'Reakcie', value: 'react' },
          { label: 'Rozdiely', value: 'difference' },
        ]"
      ></q-btn-toggle>
      <q-space />

    </q-card-actions>

    <q-table
      no-data-label=" Žiadne štatistiky z tejto hry"
      no-results-label="Žiadne štatistiky z tejto hry"
      rows-per-page-label="Maximálny počet zobrazených zaznamov na stranu"
      hide-selected-banner
      :columns="Stlpce"
      :rows="statisticList"
      row-key="id"
      :loading="!isLoaded"
      loading-text="Počkajte"
      selection="multiple"
      v-model:selected="selectedRows"
      :filter="filter"
      :filter-method="filterData"
      :visible-columns="visibleColumns"
      dark
      :pagination="initialPagination"
    >

      <template v-slot:top>
        <div class="text-h4 text-white">Štatistiky pre hru : {{  }}</div>
        <q-space />
        <q-select
          v-model="visibleColumns"
          multiple
          outlined
          dark
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="Stlpce"
          color="cyan"
          option-value="name"
          options-cover
          style="min-width: 150px"
          class="text-white"
        />
      </template>
      <template v-slot:body-cell-description="props">
        <q-td :props="props" class="my-td">
          {{
            props.row.description.length <= 20
              ? props.row.description
              : props.row.description.substring(0, 30) + '...'
          }}
          <q-tooltip v-if="props.row.description.length > 20">{{
            props.row.description
          }}</q-tooltip>
        </q-td>
      </template>
      <template v-slot:top-row>
        <q-tr>
          <q-td> </q-td>

          <q-td v-if="visibleColumns.includes('gameName')">
            <q-input
              outlined
              v-model="filter.gameName"
              label="Filtruj názov hry"
              label-color="cyan"
              dense
              dark
            />
          </q-td>
          <q-td v-if="visibleColumns.includes('nickName')">
            <q-input
              outlined
              v-model="filter.nickName"
              label="Filtruj meno použivateľa"
              label-color="cyan"
              dense
              dark
            />
          </q-td>

          <q-td v-if="visibleColumns.includes('time')">
            <q-input
              outlined
              v-model="filter.time"
              label="Fltruj podľa času v sec"
              label-color="cyan"
              dense
              dark
            />
          </q-td>
          <q-td v-if="visibleColumns.includes('clicks')">
            <q-input
              outlined
              v-model="filter.clicks"
              label="Filtruj podľa počtu klikov/ťahov"
              label-color="cyan"
              dense
              dark
            />
          </q-td>
          <q-td v-if="visibleColumns.includes('date')">
            <q-input
              outlined
              v-model="filter.date"
              label="Filtruj podľa dátumu"
              label-color="cyan"
              dense
              dark
            />
          </q-td>
          <q-td />
        </q-tr>
      </template>

      <template v-slot:pagination="scope" >

        <q-btn
          v-if="scope.pagesNumber > 2"
          icon="first_page"
          color="cyans"
          round
          dense
          flat
          :disable="scope.isFirstPage"
          @click="scope.firstPage"
        ></q-btn>

        <q-btn
          icon="chevron_left"
          color="cyan"
          round
          dense
          flat
          :disable="scope.isFirstPage"
          @click="scope.prevPage"
        ></q-btn>

        <q-btn
          icon="chevron_right"
          color="cyan"
          round
          dense
          flat
          :disable="scope.isLastPage"
          @click="scope.nextPage"
        ></q-btn>

        <q-btn
          v-if="scope.pagesNumber > 2"
          icon="last_page"
          color="cyan"
          round
          dense
          flat
          :disable="scope.isLastPage"
          @click="scope.lastPage"
        ></q-btn>
      </template>
    </q-table>

  </q-card>

</template>

<script setup lang="ts">
import { StatisticListFilter } from './models'
import { onMounted, ref, watch } from 'vue'
import { useFormatDate } from 'src/composables/commonUtils'
import { StatisticList, StatisticListREST } from 'src/models/StatisticList'
import {
  useGetItems

} from 'src/composables/StatisticListServices'
import {
  useGetUser
} from 'src/composables/UserServices'
const isLoaded = ref(false)
const initialPagination = ref({
  sortBy: 'id',
  descending: true
})
const filter = ref({
  gameName: '',
  nickName: '',
  time: '',
  clicks: '',
  date: ''
} as StatisticListFilter)
const user = ref()
const statisticList = ref([] as StatisticList[])
const allStatisticList = ref([] as StatisticList[])
const pexesoList = ref([] as StatisticList[])
const reactList = ref([] as StatisticList[])
const differenceList = ref([] as StatisticList[])
const Stlpce = ref([

  {
    name: 'gameName',
    label: 'Názov hry',
    align: 'left',
    field: 'gameName',
    sortable: true
  },
  {
    name: 'nickName',
    label: 'Meno hráča',
    align: 'left',
    field: 'nickName',
    sortable: true
  },
  {
    name: 'time',
    label: 'Čas',
    align: 'left',
    field: 'time',
    sortable: true
  },

  {
    name: 'clicks',
    label: 'Počet klikov/ťahov',
    align: 'left',
    field: 'clicks',
    sortable: true
  },
  {
    name: 'date',
    label: 'Dátum',
    align: 'left',
    field: 'date',
    sortable: true,
    format: (val: Date) => useFormatDate(val)
  }
])
const visibleColumns = ref([
  'gameName',
  'nickName',
  'time',
  'clicks',
  'date'
])

const selectedRows = ref([] as StatisticList[])
const switchList = ref(localStorage.getItem('statisticToogle'))

watch(switchList, () => {
  handleChange()
})

function handleChange () {
  saveTodoToggleOption(switchList.value)
  getTodoList()
}

function saveTodoToggleOption (value: string) {
  localStorage.setItem('statisticToogle', value)
}

function loadTodoToggleOption () {
  const option = localStorage.getItem('statisticToogle')
  if (option && option !== 'undefined') switchList.value = option
  else switchList.value = 'pexeso'
}

function getTodoList () {
  isLoaded.value = false
  switch (switchList.value) {
    default:

      useGetUser().then((statisticList) => {
        if (statisticList) {
          user.value = statisticList
        } else {
          statisticList.value = []
        }
      })

      useGetItems().then((statisticList) => {
        if (statisticList) {
          mapTodoList(statisticList)
        } else {
          statisticList.value = []
        }
        isLoaded.value = true
      })
      break
  }
}

function filterData (rows: StatisticList[], terms: StatisticListFilter) {
  for (const term in terms) {
    rows = rows.filter((row) => {
      switch (term) {
        case 'gameName':
        case 'nickName':
        case 'time':
        case 'clicks':
          return (
            (row[term] + '')
              .toLowerCase()
              .indexOf(terms[term].toLowerCase()) !== -1
          )
        case 'date':
          // eslint-disable-next-line no-case-declarations
          const rowDate = row[term]
          if (rowDate) {
            const rd = useFormatDate(rowDate).toString()
            return rd.indexOf(terms[term]) !== -1
          } else {
            return true
          }
        default:
          return false
      }
    })
  }
  return rows
}

function mapTodoList (usrs: StatisticListREST[]) {
  allStatisticList.value = usrs.map((usr: StatisticListREST) => usr)
  if (user.value.patientsnames) {
    pexesoList.value = allStatisticList.value.filter(function (value) {
      return (value.gameName === 'Pexeso' && (value.nickName === user.value.nickname || user.value.patientsnames.includes(value.nickName)))
    })
    reactList.value = allStatisticList.value.filter(function (value) {
      return (value.gameName === 'Reakcie' && (value.nickName === user.value.nickname || user.value.patientsnames.includes(value.nickName)))
    })
    differenceList.value = allStatisticList.value.filter(function (value) {
      return (value.gameName === 'NajdiRozdiely' && (value.nickName === user.value.nickname || user.value.patientsnames.includes(value.nickName)))
    })
  } else {
    pexesoList.value = allStatisticList.value.filter(function (value) {
      return (value.gameName === 'Pexeso' && value.nickName === user.value.nickname)
    })
    reactList.value = allStatisticList.value.filter(function (value) {
      return (value.gameName === 'Reakcie' && value.nickName === user.value.nickname)
    })
    differenceList.value = allStatisticList.value.filter(function (value) {
      return (value.gameName === 'NajdiRozdiely' && value.nickName === user.value.nickname)
    })
  }
  if (switchList.value === 'pexeso') {
    statisticList.value = pexesoList.value
  } else if (switchList.value === 'react') {
    statisticList.value = reactList.value
  } else if (switchList.value === 'difference') {
    statisticList.value = differenceList.value
  } else {
    statisticList.value = pexesoList.value
  }
}

onMounted(() => {
  loadTodoToggleOption()
  getTodoList()
})
</script>

<style>
.row-pointer > .v-data-table__wrapper > table > tbody > tr :hover {
  cursor: pointer;
}
</style>
