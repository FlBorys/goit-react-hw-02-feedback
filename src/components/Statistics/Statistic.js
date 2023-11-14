import { StatisticItem, StatisticList, StatisticTitle } from "./Statistic.styled"

export const Statistic = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div className="containerStatistic">
                            <StatisticTitle>Statistics</StatisticTitle>
                <StatisticList className="listStatistic">
          <StatisticItem>Good: {good}</StatisticItem>
          <StatisticItem>Neutral: {neutral}</StatisticItem>
          <StatisticItem>Bad: {bad}</StatisticItem>
            <StatisticItem>Total: {total}</StatisticItem>
            <StatisticItem>Positive feedback: {positivePercentage} %</StatisticItem>
        </StatisticList>
        </div>

    )
}