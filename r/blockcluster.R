library(RJSONIO)
library("blockcluster")

argsFull <- commandArgs()
args <- commandArgs(TRUE)

matricein <- as.matrix(read.table(args[1], header=TRUE))
out<-cocluster(matricein, datatype = "contingency", nbcocluster = c(as.integer(args[3]),as.integer(args[4])))

writeLines(toJSON(out),args[2])