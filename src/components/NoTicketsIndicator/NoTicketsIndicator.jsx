import { Alert, Space } from 'antd'

function NoTicketsIndicator() {
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
        marginBottom: '20px',
      }}
    >
      <Alert
        message="Ничего нет :("
        description="Рейсов, подходящих под заданные фильтры, не найдено"
        type="info"
        showIcon
      />
    </Space>
  )
}

export default NoTicketsIndicator
